import React from "react";
import Review from "./Review";

const ProductReview1 = ({ reviews }) => {
  return (
    <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full space-y-8">
        <div className="flex justify-start items-start">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Reviews
          </p>
        </div>
        {reviews.length === 0 ? (
          <p className="mt-10 text-lg text-gray-500">No reviews yet!</p>
        ) : (
          <>
            {reviews.map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductReview1;
