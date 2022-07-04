import { useState } from "react";
import { httpAddImage } from "../../api/Image";

var token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJKb25hczU2IiwiaWF0IjoxNjU2MDE0ODcwLCJleHAiOjE2NTYwMjIwNzB9.1-AxM1E9ZCRy6wwCHg7yagDn7ngs6--k8gxekJ5XAYNjigvkUM3XI-AK0L7ETirs";

const ProfileImage = () => {
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
      {error}
      <div className="flex flex-col md:flex-row align-center justify-center">
        <div className="flex h-96 items-center justify-center ">
          {imagePreview === "" ? (
            <label className="w-64 h-full flex flex-col justify-center items-center text-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:opacity-1 hover:text-gray-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/220px-Tesla_circa_1890.jpeg"
                alt="placeholder"
                className="w-full h-full"
              />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 self-end cursor-pointer mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => {
                  setFile(null);
                  setImagePreview("");
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              <img src={imagePreview} alt="" className="rounded-md shadow-md" />
              <button
                className="px-6 py-2 mt-2 bg-indigo-500  text-white hover:bg-indigo-600 rounded-md max-w-xs self-center"
                onClick={handleSubmit}
              >
                Update Image
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
