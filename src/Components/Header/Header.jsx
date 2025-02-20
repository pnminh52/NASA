import React from "react";

const Header = () => {
  return (
    <div className="h-21 sm:h-23 bg-black  px-9 mx-auto">
      {/* Mobile Layout */}
      <div className="block sm:hidden flex justify-between items-center h-full">
        {/* Mobile Menu Icon */}
        <div className="cursor-pointer  md:hidden">
          <button>
            <div className="space-y-1 cursor-pointer">
              <div className="w-5 h-[2px] rounded-full bg-white"></div>
              <div className="w-5 h-[2px] rounded-full bg-white"></div>
              <div className="w-5 h-[2px] rounded-full bg-white"></div>
            </div>
          </button>
        </div>

        {/* NASA Logo */}
        <img
          className="w-auto h-14 cursor-pointer"
          src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo@2x.png"
          alt="NASA"
        />

        {/* Placeholder */}
        <div>
          <svg
            className="hover:fill-white duration-300 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 12 12"
            fill="#C1C1C1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 10.643L8.804 7.447a4.8 4.8 0 10-1.357 1.357L10.642 12 12 10.643zM1.36 4.8a3.44 3.44 0 116.879 0 3.44 3.44 0 01-6.879 0z"></path>
          </svg>
        </div>
      </div>
      {/* Laptop Layout */}
      <div className="hidden relative sm:flex items-center justify-between h-full">
        <div className="flex items-center gap-5 h-full">
          <p className="text-white font-bold text-lg cursor-pointer">Explore</p>
          <svg
            className="fill-white cursor-pointer"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="16px"
            height="17px"
            viewBox="0 0 16 17"
            xml:space="preserve"
          >
            <g>
              <g>
                <path d="M8,16.5c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S12.4,16.5,8,16.5z M8,1.5c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7 s7-3.1,7-7C15,4.6,11.9,1.5,8,1.5z"></path>
              </g>
              <g>
                <path d="M8,10l2.6-2.6L11.2,8L8,11.2L4.8,8l0.6-0.6L8,10z"></path>
              </g>
            </g>
          </svg>
          <input
            type="text"
            className="border-1 px-2 border-[#242426] text-white bg-black h-8 "
            placeholder="Search..."
          />
        </div>
        <div>
          <img
            className="w-auto h-14 cursor-pointer absolute left-1/2 top-1/2 -translate-y-1/2"
            src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo@2x.png"
            alt="NASA"
          />
        </div>

        <div>
          <ul className="flex gap-6 ">
            <li className=" cursor-pointer flex items-center gap-1.5">
              <a href="" className="text-white font-bold text-lg">
                News & Events
              </a>
              <svg
                version="1.1"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                className="w-3 h-3"
                viewBox="0 0 306 306"
                xml:space="preserve"
              >
                <g>
                  <polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35 "></polygon>
                </g>
              </svg>
            </li>
            <li className=" cursor-pointer flex items-center gap-1.5">
              <a href="" className="text-white font-bold text-lg">
                Multimedia
              </a>
              <svg
                version="1.1"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                className="w-3 h-3"
                viewBox="0 0 306 306"
                xml:space="preserve"
              >
                <g>
                  <polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35 "></polygon>
                </g>
              </svg>
            </li>
            <li className="flex gap-1.5 items-center group ">
              <a
                href=""
                className="text-white font-bold text-lg cursor-pointer"
              >
                NASA+
              </a>
              <p
                className="text-white tracking-[4px]  px-2 border border-red-500 text-[10px] transition duration-300 group-hover:bg-[#B60109] rounded-[2px] cursor-pointer uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Live
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
