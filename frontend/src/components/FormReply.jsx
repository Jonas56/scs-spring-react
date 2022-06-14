import React from "react";

const FormReply = (props) => {
  return (
    <form action="" className="w-full p-4">
      <div className="mb-2">
        <label for="comment" className="text-lg text-gray-600 font-medium">
          Add a comment
        </label>
        <textarea
          className="w-full h-32 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1 font-normal text-base"
          name="comment"
          placeholder="Comment..."
          id="comment"
        ></textarea>
      </div>
      <div>
        <button className="px-3 py-2 text-sm text-blue-100 bg-indigo-600 rounded mr-2">
          Comment
        </button>
        <button className="px-3 py-2 text-sm text-indigo-600 border border-indigo-600 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default FormReply;
