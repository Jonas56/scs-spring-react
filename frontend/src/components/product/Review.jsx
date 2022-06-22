import React, { useState } from "react";
import Moment from "moment";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Review({ review }) {
  const [menu, setMenu] = useState(true);
  return (
    <div
      id="reviews"
      className="w-full flex justify-start items-start flex-col  p-8 bg-gray-50"
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-row justify-between items-start">
          <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
            {review.title}
          </p>
          <button onClick={() => setMenu(!menu)} className="ml-4 md:hidden">
            <svg
              className={"transform " + (menu ? "rotate-180" : "rotate-0")}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12.5L10 7.5L5 12.5"
                stroke="#1F2937"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="cursor-pointer mt-2 md:mt-0 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                review?.rating > rating ? "text-gray-900" : "text-gray-200",
                "h-6 w-6 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
      <div className={"md:block " + (menu ? "block" : "hidden")}>
        <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
          {review.comment}
        </p>
        <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
          <div>
            <img
              src="https://i.ibb.co/QcqyrVG/Mask-Group.png"
              alt="girl-avatar"
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-2">
            <p className="text-base font-medium leading-none text-gray-800">
              {review.user.username}
            </p>
            <p className="text-sm leading-none text-gray-600">
              {Moment(review.date).format("MMM Do YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
