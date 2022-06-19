export default function HeroSection() {
  return (
    
      <div className="bg-hero-img  bg-cover  bg-center  ">
        <div className="bg-white bg-opacity-20 bg-center  ">
      <div className=" container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="  w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-black font-black leading-7 md:leading-10">
          Smart Connected Suitcase {" "} 
            <span className=" text-indigo-700">TRAVEL SMART  </span> 
          </h1>
          <p className=" mt-5 sm:mt-10 lg:w-10/12  text-black font-normal text-center text-sm sm:text-lg">
          After decades of no innovation in the luggage industry, we re-imagined the suitcase to solve all the problems of the modern traveler. No more luggage nightmares to spoil your trips. With <b>SCS</b> , you will travel smarter and be the coolest kid in the airport.
         
         </p>
        </div>
        <div className=" flex justify-center items-center">
          <a href="products">
          <button   className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
           SHOP NOW
          </button> </a>
        </div>
      </div> </div>
    </div>
  );
}
