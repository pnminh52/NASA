import React from "react";

const Banner = () => {
  return (
    <div >
        <div className=" relative">
      {/* Wrapper for Image + Gradient */}
      <div className=" w-full h-full">
        {/* Gradient Overlay (Only Covers Image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>

        {/* Image */}
        <img
          className="w-full h-[650px] object-cover"
          src="https://www.nasa.gov/wp-content/uploads/2025/02/2024yr4-discovery-atlas.gif?w=650"
          alt="NASA"
        />
      </div>

      {/* Text Content (Outside the Image) */}
    <div className="hidden sm:block">
    <div className="absolute top-[40%] left-6 transform -translate-y-1/2 space-y-6">
        <div className="w-[700px]">
          <p
            className="text-white leading-[1.0] font-bold text-[70px]"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Asteroid 2025 YR4
          </p>
        </div>
        <div className="w-[600px] space-y-6">
          <p
            className="text-white "
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Asteroid 2024 YR4 is a near-Earth asteroid, meaning it is an
            asteroid in an orbit that brings it into Earth’s region of the Solar
            System. 2024 YR4 is estimated to be about 130 to 300 feet wide and
            has a very small chance of Earth impact on Dec. 22, 2032.
          </p>
          <button
            style={{ fontFamily: '"DM Sans", sans-serif' }}
            className="hover:bg-[#8B0A03] transition duration-300 cursor-pointer rounded-sm bg-[#f64137] px-5 py-2 text-white font-bold text-[20px]"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex  absolute bottom-0 left-6 right-8 justify-between items-center">
        <div className=" gap-4 py-6 grid grid-cols-3">
          <div className=" text-white w-[280px]  border-t border-gray-600">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="tracking-[4px] mt-4 text-xs"
            >
              TRACKING ASTEROIDS{" "}
            </p>
            <div className="flex mt-4 group items-center gap-2">
              <p className=" font-semibold cursor-pointer text-lg">
                Planetary Defense{" "}
              </p>
              <svg
                className="w-5 transition duration-300 group-hover:bg-[#B60109] bg-[#F64137] cursor-pointer rounded-full h-5 rotate-320"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="none"></circle>
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" text-white w-[280px] truncate   border-t border-gray-600">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="tracking-[4px] mt-4 text-xs"
            >
              MONITORING ASTEROID 2025 YR4{" "}
            </p>
            <div className="flex mt-4 group items-center gap-2">
              <p className=" font-semibold cursor-pointer text-lg">
                Latest Analyses{" "}
              </p>
              <svg
                className="w-5 transition duration-300 group-hover:bg-[#B60109] bg-[#F64137] cursor-pointer rounded-full h-5 rotate-320"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="none"></circle>
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" text-white w-[280px]  border-t border-t border-gray-600">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="tracking-[4px] mt-4 text-xs"
            >
              ASTEROID HUNTER{" "}
            </p>
            <div className="flex mt-4 group items-center gap-2">
              <p className=" font-semibold cursor-pointer text-lg">
                NEO Surveyor{" "}
              </p>
              <svg
                className="w-5 transition duration-300 group-hover:bg-[#B60109] bg-[#F64137] cursor-pointer rounded-full h-5 rotate-320"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="none"></circle>
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
         
          <div className="border-white border-2 rounded-full">
           
           <img className="w-12 h-12 rounded-full" src="https://www.nasa.gov/wp-content/uploads/2025/02/2024yr4-discovery-atlas.gif?w=650" alt="" />
       
      
     </div>
         
          <div className=" bg-[#4e4e4e] cursor-pointer rounded-full p-4 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2 1v22h7v-22zm13 0v22h7v-22z" fill="white"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="block sm:hidden">
        <div className="absolute top-2 px-6">
        <div className="flex gap-4 items-center">
          <div className="border-white border-2 rounded-full">
           
                <img className="w-11 h-11 rounded-full" src="https://www.nasa.gov/wp-content/uploads/2025/02/2024yr4-discovery-atlas.gif?w=650" alt="" />
            
           
          </div>
          <div className=" bg-[#4e4e4e] cursor-pointer rounded-full p-4 flex items-center justify-center">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2 1v22h7v-22zm13 0v22h7v-22z" fill="white"></path>
            </svg>
          </div>
        </div>
        <div className="mt-7 space-y-4">
        <p
            className="text-white leading-[1.0] font-bold text-[35px]"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Asteroid 2025 YR4
          </p>
          <p
            className="text-white text-[15px]"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Asteroid 2024 YR4 is a near-Earth asteroid, meaning it is an
            asteroid in an orbit that brings it into Earth’s region of the Solar
            System. 2024 YR4 is estimated to be about 130 to 300 feet wide and
            has a very small chance of Earth impact on Dec. 22, 2032.
          </p>
          <button
            style={{ fontFamily: '"DM Sans", sans-serif' }}
            className="hover:bg-[#8B0A03] transition duration-300 cursor-pointer rounded-sm bg-[#D83933] px-4 py-1 text-white font-bold text-[23px]"
          >
            Learn More
          </button>
        </div>
        
        </div>
        <div className="absolute bottom-4 px-6 w-full space-y-2">
          
            <div className="  text-white w-full border-t border-t border-gray-600">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="tracking-[4px] mt-4 text-xs"
            >
              TRACKING ASTEROIDS{" "}
            </p>
            <div className="flex mt-4 group items-center gap-2">
              <p className="  font-semibold cursor-pointer text-lg">
                Planetary Defense{" "}
              </p>
              <svg
                className="w-5 transition duration-300 group-hover:bg-[#B60109] bg-[#F64137] cursor-pointer rounded-full h-5 rotate-320"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="none"></circle>
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className="  text-white w-full border-t border-t border-gray-600">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="tracking-[4px]  mt-4 text-xs"
            >
               MONITORING ASTEROID 2025 YR4{" "}
            </p>
            <div className="flex mt-4 group items-center gap-2">
              <p className=" font-semibold cursor-pointer text-lg">
              Latest Analyses{" "}
              </p>
              <svg
                className="w-5 transition duration-300 group-hover:bg-[#B60109] bg-[#F64137] cursor-pointer rounded-full h-5 rotate-320"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="none"></circle>
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className="  text-white w-full border-t border-t border-gray-600">
            <p
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="tracking-[4px] mt-4 text-xs"
            >
              ASTEROID HUNTER{" "}
            </p>
            <div className="flex mt-4 group items-center gap-2">
              <p className=" font-semibold cursor-pointer text-lg">
              NEO Surveyor{" "}
              </p>
              <svg
                className="w-5 transition duration-300 group-hover:bg-[#B60109] bg-[#F64137] cursor-pointer rounded-full h-5 rotate-320"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="none"></circle>
                <path
                  d="M8 16.956h12.604l-3.844 4.106 1.252 1.338L24 16l-5.988-6.4-1.252 1.338 3.844 4.106H8v1.912z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
         
        </div>
    </div>
    

      
    </div>
    </div>
  );
};

export default Banner;
