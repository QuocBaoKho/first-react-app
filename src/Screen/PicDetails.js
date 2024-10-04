import axios, { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const PicDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [pic, setPic] = useState([]);
  useEffect(() => {
    const fetchPic = async () => {
      console.log("image Id: " + id);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/images/${id}`
        );
        console.log("Data: " + response.data);
        setPic(response.data);
        console.log(response);
      } catch (err) {
        if (err.response && err.response.status == 404) {
          alert("Image not found");
        } else {
          alert("Error code: " + err.response.status);
          console.error(err);
        }
      }
    };
    fetchPic();
  }, []);

  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <div className="w-1/3 md:w-1/4 ">
          <img
            className="m-6 object-contain w-[90%] h-auto rounded shadow-md bg-black"
            src={`data:image/jpeg;base64,${pic.imageData}`}
          ></img>
        </div>
        <div className="m-2 p-2 bg-[#a53cce] rounded flex-1 w-full md:w-2/3">
          <div>
            <h1 className="mb-4 font-bold font-mono text-left">Details</h1>
            <hr className=""></hr>
            <p className="mt-4 mb-6 text-left">{pic.imageName}</p>
          </div>
          <div>
            <h1 className="mb-4 font-bold font-mono text-left">Created on</h1>
            <hr className=""></hr>
            <p className="mt-4 mb-6 text-left">
              {new Date(pic.uploadDate).toLocaleDateString("vi-VN")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PicDetails;
