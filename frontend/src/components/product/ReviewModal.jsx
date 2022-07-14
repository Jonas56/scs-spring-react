/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import ReactStars from "react-rating-stars-component";
import useFormInputs from "../../hooks/useFormInputs";
import { httpAddReview } from "../../api/productService";
import { useNavigate } from "react-router-dom";
import Alert from "../utils/Alert";

export default function ReviewModal({
  productId,
  token,
  openModal,
  handleOpenModal,
}) {
  // const [open, setOpen] = useState(true);
  const [inputs, setInputs] = useFormInputs({
    title: "",
    comment: "",
  });
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(null);

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const review = {
      ...inputs,
      rating,
    };
    try {
      await httpAddReview(productId, review, token);
      handleOpenModal(false);
      navigate(0, { state: { success: true } });
    } catch (error) {
      setError("Failed to add review");
    }
  };

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleOpenModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h1 className="text-3xl font-medium block mb-10">
                    Write A review
                  </h1>
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="text-center px-10">
                      {error && <Alert error={error} />}
                    </div>
                    <div className="flex items-center justify-between ">
                      <div className="text-">Rate</div>
                      <div className="flex items-center cursor-pointer">
                        <ReactStars
                          count={5}
                          size={24}
                          onChange={ratingChanged}
                          emptyIcon={
                            <StarIcon
                              className="text-gray-300 h-6 w-6 flex-shrink-0"
                              aria-hidden="true"
                            />
                          }
                          filledIcon={
                            <StarIcon
                              className=" h-6 w-6 flex-shrink-0 text-black"
                              aria-hidden="true"
                            />
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Title"
                        required
                        onChange={setInputs}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="details"
                        className="block mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Comment
                      </label>
                      <textarea
                        name="comment"
                        id="details"
                        placeholder="Comment"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required
                        cols="50"
                        rows="4"
                        onChange={setInputs}
                      ></textarea>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse w-full">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Post Review &rarr;
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleOpenModal}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
