import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { httpAddImage } from "./../api/Image";

var token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJKb25hczU2IiwiaWF0IjoxNjU2MDE0ODcwLCJleHAiOjE2NTYwMjIwNzB9.1-AxM1E9ZCRy6wwCHg7yagDn7ngs6--k8gxekJ5XAYNjigvkUM3XI-AK0L7ETirs";

const AddImage = () => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await httpAddImage(formData, token);
      //navigate(0, { state: { success: true } });
    } catch (error) {
      setError("Failed to add image");
    }
  };

  const imagePreviewHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row align-center justify-center gap-10 my-16">
        <div className="flex h-96 items-center justify-center ">
          {imagePreview === "" ? (
            <label className="w-64 h-full flex flex-col justify-center items-center px-4 py-6 bg-gray-700 text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-white hover:text-gray-700">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select an image
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  imagePreviewHandler(e);
                  setFile(e.target.files[0]);
                }}
              />
            </label>
          ) : (
            <div className="relative max-w-md h-96 flex flex-col justify-center items-center gap-1">
              <IoMdCloseCircle
                className=" text-gray-700 w-7 h-7 self-end cursor-pointer mr-2"
                onClick={() => {
                  setFile(null);
                  setImagePreview("");
                }}
              />
              {}
              <img
                src={imagePreview}
                alt=""
                className="rounded-md hover:scale-95 transition duration-500"
              />
              <button
                className="px-6 py-2 -mt-2 bg-white hover:bg-gray-700 text-gray-700 hover:text-white rounded-md max-w-xs self-center"
                onClick={handleSubmit}
              >
                Add memorie
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddImage;
