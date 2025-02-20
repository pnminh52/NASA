import React from "react";

const Home = () => {
  return (
    <div className=" relative">
      {/* Wrapper for Image + Gradient */}
      <div className="relative w-full h-full">
        {/* Gradient Overlay (Only Covers Image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10"></div>

        {/* Image */}
        <img
          className="w-full h-[700px] object-cover"
          src="https://www.nasa.gov/wp-content/uploads/2025/02/2024yr4-discovery-atlas.gif?w=650"
          alt="NASA"
        />
      </div>

      {/* Text Content (Outside the Image) */}
      <div className="absolute top-[40%] left-8 transform -translate-y-1/2 space-y-6">
        <div className="w-[700px]">
          <p
            className="text-white leading-[1.0] font-bold text-[80px]"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Asteroid 2025 YR4
          </p>
        </div>
        <div className="w-[600px] space-y-6">
          <p
            className="text-white"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Asteroid 2024 YR4 is a near-Earth asteroid, meaning it is an
            asteroid in an orbit that brings it into Earth’s region of the Solar
            System. 2024 YR4 is estimated to be about 130 to 300 feet wide and
            has a very small chance of Earth impact on Dec. 22, 2032.
          </p>
          <button
            style={{ fontFamily: '"DM Sans", sans-serif' }}
            className="hover:bg-[#8B0A03] transition duration-300 cursor-pointer rounded-md bg-[#f64137] px-6 py-2 text-white font-bold text-[20px]"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-1 left-8 gap-6 py-20 grid grid-cols-3">
        <div className=" text-white border-t border-t border-gray-500">
          <p style={{ fontFamily: "'DM Mono', monospace" }} className="tracking-[6px] mt-6 text-sm">TRACKING ASTEROIDS </p>
            
        </div>
        
        <div className="text-white border-t border-t border-gray-500">Cols</div>
        <div className="text-white border-t border-t border-gray-500">Cols</div>
      </div>
    </div>
  );
};

export default Home;
