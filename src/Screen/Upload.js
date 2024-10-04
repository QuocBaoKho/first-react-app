import { useState } from "react";
import "../Design/home.css";
import axios from "axios";
const Upload = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    console.log(file);
    setImageName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleImageNameChange = (event) => {
    setImageName(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image before uploading.");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("imageName", imageName);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "image-name": imageName,
          },
        }
      );
      console.log("Success:", response.data);
      alert("Success!");
    } catch (err) {
      alert("Upload image to database failed");
      console.error("Error uploading image", err);
    }
  };
  return (
    <div>
      <h1 className="text-[35px] font-bold">UPLOAD IMAGE NAME</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        ></input>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="w-[250px] h-auto object-cover"
          ></img>
        )}
        <input
          type="text"
          placeholder="Enter image name"
          value={imageName}
          onChange={handleImageNameChange}
        />
        <button
          className="m-2 bg-red-700 text-[#222222] rounded-md"
          type="submit"
        >
          {" "}
          Upload{" "}
        </button>
      </form>
    </div>
  );
};
export default Upload;
