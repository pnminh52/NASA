import React from "react";

const Content = () => {
  return (
    <div className="">
      <div className="px-10">
       <div className="block sm:hidden">
       <div className="py-10">
          <div>
            <p
              className="text-3xl font-bold text-[#1b1b1b]"
              style={{ fontFamily: '"inter", sans-serif' }}
            >
              Featured News
            </p>
          </div>
          <div className=" mt-6">
            <div className="flex group items-center gap-2">
              <p
                className=" font-bold cursor-pointer text-xl"
                style={{ fontFamily: '"inter", sans-serif' }}
              >
                More NASA News
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
            <div className="py-3 space-y-5">
              <div className="relative  w-full cursor-pointer h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                <img
                  className="w-auto min-h-[420px] object-cover"
                  src="https://www.nasa.gov/wp-content/uploads/2025/02/moon-photo-cropped-3.jpg?w=1024"
                  alt=""
                />
                <div className="absolute top-6 left-6 flex gap-2 items-center">
                  <svg
                    className="w-4 h-4 fill-white"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    xml:space="preserve"
                  >
                    <g>
                      {" "}
                      <path d="M8,0c4.4,0,7.9,3.5,8,7.9c0.1,4.5-3.5,8.1-7.9,8.1c-4.5,0-8-3.6-8.1-7.9C-0.1,3.6,3.6,0,8,0z M0.8,8 c0,4,3.2,7.2,7.2,7.2c4,0,7.2-3.2,7.2-7.2c0-4-3.3-7.2-7.2-7.2C4,0.8,0.8,4,0.8,8z"></path>
                      <path d="M11.2,4c0,2.7,0,5.3,0,8c-2.1,0-4.3,0-6.4,0c0,0,0,0,0-0.1c0-1.8,0-3.6,0-5.4c0-0.8,0-1.6,0-2.4 C4.8,4,4.8,4,4.9,4C6.2,4,7.6,4,9,4C9.7,4,10.4,4,11.2,4C11.1,4,11.2,4,11.2,4z M9.6,5.6c-1.1,0-2.1,0-3.2,0c0,0,0,0,0,0.1 c0,0.5,0,1,0,1.5c0,0.1,0,0.1,0.1,0.1c1,0,2,0,3.1,0c0,0,0.1,0,0.1-0.1C9.6,6.6,9.6,6.2,9.6,5.6C9.6,5.6,9.6,5.6,9.6,5.6z M6.4,8.8C6.4,8.8,6.4,8.8,6.4,8.8c1.1,0,2.1,0,3.1,0c0.1,0,0.1,0,0.1-0.1c0-0.2,0-0.4,0-0.7c0,0,0,0,0-0.1C8.5,8,7.5,8,6.4,8 C6.4,8.3,6.4,8.5,6.4,8.8z M8.8,10.4C8.8,10.4,8.8,10.4,8.8,10.4c0-0.3,0-0.5,0-0.7c0-0.1,0-0.1-0.1-0.1c-0.5,0-1,0-1.5,0 c-0.3,0-0.5,0-0.8,0c0,0,0,0-0.1,0c0,0.3,0,0.5,0,0.8C7.2,10.4,8,10.4,8.8,10.4z"></path>
                    </g>
                  </svg>
                  <p className="text-white text-[11px] uppercase tracking-[4px]">
                    News Release
                  </p>
                </div>
                <div className="absolute bottom-6 px-6 space-y-2">
                  <p className="text-white text-[11px] uppercase tracking-[4px]">
                    3 Min Read{" "}
                  </p>

                  <p className="text-white leading-[1.1] font-bold text-lg">
                    NASA Sets Coverage of Firefly’s First Robotic Commercial
                    Moon Landing
                  </p>
                </div>
              </div>
              <div className="relative  w-full cursor-pointer h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                <img
                  className="w-full min-h-[400px]  max-h-[420px] object-cover"
                  src="https://www.nasa.gov/wp-content/uploads/2025/02/spherex.jpg?w=683"
                  alt=""
                />
                <div className="absolute top-6 left-6 flex gap-2 items-center">
                  <svg
                    className="w-4 h-4 fill-white"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    xml:space="preserve"
                  >
                    <g>
                      {" "}
                      <path d="M8,0c4.4,0,7.9,3.5,8,7.9c0.1,4.5-3.5,8.1-7.9,8.1c-4.5,0-8-3.6-8.1-7.9C-0.1,3.6,3.6,0,8,0z M0.8,8 c0,4,3.2,7.2,7.2,7.2c4,0,7.2-3.2,7.2-7.2c0-4-3.3-7.2-7.2-7.2C4,0.8,0.8,4,0.8,8z"></path>
                      <path d="M11.2,4c0,2.7,0,5.3,0,8c-2.1,0-4.3,0-6.4,0c0,0,0,0,0-0.1c0-1.8,0-3.6,0-5.4c0-0.8,0-1.6,0-2.4 C4.8,4,4.8,4,4.9,4C6.2,4,7.6,4,9,4C9.7,4,10.4,4,11.2,4C11.1,4,11.2,4,11.2,4z M9.6,5.6c-1.1,0-2.1,0-3.2,0c0,0,0,0,0,0.1 c0,0.5,0,1,0,1.5c0,0.1,0,0.1,0.1,0.1c1,0,2,0,3.1,0c0,0,0.1,0,0.1-0.1C9.6,6.6,9.6,6.2,9.6,5.6C9.6,5.6,9.6,5.6,9.6,5.6z M6.4,8.8C6.4,8.8,6.4,8.8,6.4,8.8c1.1,0,2.1,0,3.1,0c0.1,0,0.1,0,0.1-0.1c0-0.2,0-0.4,0-0.7c0,0,0,0,0-0.1C8.5,8,7.5,8,6.4,8 C6.4,8.3,6.4,8.5,6.4,8.8z M8.8,10.4C8.8,10.4,8.8,10.4,8.8,10.4c0-0.3,0-0.5,0-0.7c0-0.1,0-0.1-0.1-0.1c-0.5,0-1,0-1.5,0 c-0.3,0-0.5,0-0.8,0c0,0,0,0-0.1,0c0,0.3,0,0.5,0,0.8C7.2,10.4,8,10.4,8.8,10.4z"></path>
                    </g>
                  </svg>
                  <p className="text-white text-[11px] uppercase tracking-[4px]">
                    News Release
                  </p>
                </div>
                <div className="absolute bottom-6 px-6 space-y-2">
                  <p className="text-white text-[11px] uppercase tracking-[4px]">
                    4 Min Read
                  </p>

                  <p className="text-white leading-[1.1] font-bold text-lg">
                    NASA Sets Launch Coverage for Missions Studying Cosmic
                    Origins, Sun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Content;
