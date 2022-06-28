import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { httpGetProduct } from "../api/productService";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/product/BreadCrumb";
import ProductReviews from "../components/product/ProductReviews";
import ReviewModal from "../components/product/ReviewModal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import ModalSuccess from "../components/product/ModalSuccess";

const sampleProduct = {
  id: 1,
  name: "Basic Tee",
  description: "description",
  category: "category",
  images: [
    {
      path: "image_path",
    },
  ],
  price: "35",
  avg: 3.0,
  reviews: [],
  features: [{ name: "Size" }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const params = useParams("id");
  const [selectedFeature, setSelectedFeature] = useState("");
  const navigate = useNavigate();
  const [product, setProduct] = useState(sampleProduct);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await httpGetProduct(params.id);
        setProduct(response);
      } catch (error) {
        navigate("/404");
      }
    }
    fetchData();
  }, [params, navigate]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product?.images[0]?.path,
      quantity: quantity,
      feature: selectedFeature,
    };
    try {
      dispatch(addToCart({ cartItem }));
      setOpenModalSuccess(true);
    } catch (error) {}
  };

  return (
    <>
      <Header />
      {openModalSuccess && (
        <ModalSuccess
          openModalSuccess={openModalSuccess}
          handleOpenModalSuccess={handleOpenModalSuccess}
        />
      )}
      {openModal && (
        <ReviewModal
          productId={product.id}
          token={user?.accessToken}
          openModal={openModal}
          handleOpenModal={handleOpenModal}
        />
      )}
      <div className="bg-white">
        <div className="pt-6">
          {/* BreadCurumb */}
          <BreadCrumb product={product} />
          {/* Image gallery */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={
                  product?.images[0]
                    ? product.images[0]?.path
                    : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                }
                alt="alt"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={
                    product?.images[0]
                      ? product.images[0]?.path
                      : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  }
                  alt="alt"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={
                    product?.images[0]
                      ? product.images[0]?.path
                      : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  }
                  alt="alt"
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={
                  product?.images[0]
                    ? product.images[0]?.path
                    : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                }
                alt="alt"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-10 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {product?.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">
                {"$"}
                {product?.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product?.avg > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product?.avg} out of 5 stars</p>
                  <a
                    href="#reviews"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {product?.reviews.length} reviews
                  </a>
                  <div>
                    {user && (
                      <button
                        className="text-sm text-gray-500 px-2 hover:text-gray-700 font-medium"
                        onClick={handleOpenModal}
                      >
                        Write a review
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <form className="mt-10" onSubmit={handleAddToCart}>
                {/* Features */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900 font-medium">
                      Features
                    </h3>
                    <a
                      href="https://localhost:3000/#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Feature guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedFeature}
                    onChange={setSelectedFeature}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a feature
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product?.features?.map((feature) => (
                        <RadioGroup.Option
                          key={feature.name}
                          value={feature}
                          className={({ active }) =>
                            classNames(
                              "bg-white shadow-sm text-gray-900 cursor-pointer",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {feature.name}
                              </RadioGroup.Label>
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "absolute -inset-px rounded-md pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="text-center flex justify-end">
                  <p className="text-lg text-gray-900 font-medium mr-10 py-2">
                    Qty:
                  </p>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-20 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul className="pl-4 list-disc text-sm space-y-2">
                    {/* TODO: Add highlights */}
                    {/* {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))} */}
                    <span className="text-gray-600">Highlight</span>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Comment Section */}
          <ProductReviews reviews={product.reviews} />
        </div>
      </div>

      <Footer />
    </>
  );
}
