export default function NewsLetter() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="">
          <h1 className="xl:text-4xl sm:text-3xl font-bold leading-10 text-gray-800 mb-4 xl:text-left md:mt-0 mt-4">
            Subscribe to our newsletter
          </h1>
          <p className="text-base leading-normal text-gray-600 text-left xl:text-left">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add.
          </p>
        </div>
        <div className="">
          <div className="flex items-stretch">
            <input
              className="bg-white rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-full border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Your Email"
            />
            <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
