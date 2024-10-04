import axios from "axios";
import { useEffect, useState } from "react";
import "../Design/home.css";
import { useNavigate } from "react-router-dom";

const Exhibition = () => {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState("");
  const [picList, setPicList] = useState([]);
  useEffect(() => {
    const fetchAllPics = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/images/");
        setPicList(response.data);
      } catch (err) {
        console.log("Error fetching images: ", err);
        alert("Failed to fetch images from the system");
      }
    };
    fetchAllPics();
  }, []);
  const handleSearch = (event) => {
    setKeywords(event.target.value);
    console.log(event.target.value + " Kono Dio Da");
  };
  const filteredPics = picList.filter((pic) =>
    pic.imageName.toLowerCase().includes(keywords.toLowerCase())
  );
  const handleDetailClick = (pic) => {
    navigate(`/exhb/details/${pic.id}`, { state: { pic: pic } });
  };
  return (
    <div>
      <h1 className="p-2 font-sans italic text-[33px]">EXHIBITIONist</h1>
      <input
        type="search"
        className="p-2 m-2 w-[50%]"
        placeholder="big diddy doo"
        value={keywords}
        onChange={handleSearch}
      />
      <div className="flex flex-row m-2 p-2">
        {filteredPics &&
          filteredPics.map((pic) => (
            <div key={pic.id} className="p-2 m-2 w-[270px]">
              <img
                src={`data:image/jpeg;base64,${pic.imageData}`}
                className="object-cover w-full h-auto"
                alt={pic.imageName}
              />
              <div className="relative">
                <p className="my-2 italic text-[#9b8a8a] whitespace-nowrap overflow-hidden text-ellipsis w-[250px]">
                  {pic.imageName}
                </p>
                <div></div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="my-2">
                  {new Date(pic.uploadDate).toLocaleDateString("vi-VN")}
                </p>
                <p className="my-2">
                  [
                  <u
                    className="text-[blue] cursor-pointer"
                    onClick={() => {
                      handleDetailClick(pic);
                    }}
                  >
                    Details
                  </u>
                  ]
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Exhibition;
