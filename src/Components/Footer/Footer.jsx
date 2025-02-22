import React from "react";

const Footer = () => {
  return (
    <div className="block sm:hidden bg-black">
      <div className="  px-6">
        <div className="py-12">
          <img
            className=" w-auto h-13 cursor-pointer"
            src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo@2x.png"
            alt="NASA"
          />
        </div>
        <div className="space-y-4">
          <p className="text-white font-bold text-xl leading-[1.2]">
            National Aeronautics and Space Administration
          </p>
          <p className="text-[#A8B9BB] text-md ">
            NASA explores the unknown in air and space, innovates for the
            benefit of humanity, and inspires the world through discovery.
          </p>
          <p className="text-white">About NASA's Mission</p>
          <div className="flex items-center gap-2">
            <p className="text-white font-bold">Join Us</p>
            <svg
              className="w-5 transition duration-300 group-hover:bg-[#B60109] bg-[#F64137] cursor-pointer rounded-full h-5 rotate-360"
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
        <div className="py-14">
          <div className="grid grid-cols-2">
            <div>
              <ul
                className="text-white space-y-2.5"
                style={{ fontFamily: '"inter", sans-serif' }}
              >
                <li>Home</li>
                <li>News & Events</li>
                <li>Multimedia</li>
                <li className="group flex gap-2 items-center">
                  <p>NASA+</p>{" "}
                  <p
                    className="text-white tracking-[1.5px]  px-1 border border-red-500 text-[10px] transition duration-300 group-hover:bg-[#B60109] rounded-[2px] cursor-pointer uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Live
                  </p>
                </li>
                <li>Missions</li>
                <li>Humans in Space</li>
                <li>Earth & Climate</li>
                <li>The Solar System</li>
              </ul>
            </div>
            <div>
              <ul
                className="text-white space-y-2.5"
                style={{ fontFamily: '"inter", sans-serif' }}
              >
                <li>The Universe</li>
                <li>Science</li>
                <li>Aeronautics</li>
                <li>Technology</li>
                <li>Learning Resources</li>
                <li>About NASA</li>
                <li>NASA en Español</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          <p className="text-[#959599] font-bold text-md">Follow NASA</p>
          <div className="flex gap-3 py-4">
            <div className="bg-[#2E2E32] w-8 h-8 flex justify-center items-center rounded-full cursor-pointer">
              <svg
                className=""
                alt="Facebook"
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M8.55557 4.25966H6.95557C6.31794 4.25966 6.1852 4.52158 6.1852 5.18173V6.63003H8.55557L8.30787 9.0004H6.1852V17.2967H2.62965V9.0004H0.259277V6.63003H2.62965V3.89462C2.62965 1.79803 3.73306 0.704102 6.21957 0.704102H8.55557V4.25966Z"
                  fill="#F7F5F4"
                ></path>
              </svg>
            </div>
            <div className="bg-[#2E2E32] w-8 h-8 flex justify-center items-center rounded-full cursor-pointer">
              <svg
                alt="Instagram"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.74015 9.0004C4.74015 11.3542 6.64829 13.2611 9.00089 13.2611C11.3535 13.2611 13.2616 11.353 13.2616 9.0004C13.2616 6.6478 11.3535 4.74084 9.00089 4.74084C6.64829 4.74084 4.74015 6.6478 4.74015 9.0004ZM11.7625 9.00037C11.7625 10.5281 10.524 11.7654 8.9975 11.7654C7.47098 11.7654 6.23247 10.5281 6.23247 9.00037C6.23247 7.47267 7.47098 6.23533 8.9975 6.23533C10.524 6.23533 11.7625 7.47267 11.7625 9.00037Z"
                  fill="#F7F5F4"
                ></path>
                <path
                  d="M12.4344 4.57255C12.4344 5.12247 12.88 5.5681 13.4299 5.5681C13.9798 5.5681 14.4255 5.12129 14.4255 4.57255C14.4255 4.02262 13.9798 3.57699 13.4299 3.57699C12.88 3.57699 12.4344 4.02262 12.4344 4.57255Z"
                  fill="#F7F5F4"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4225 17.2469C15.4317 17.1083 17.1111 15.4371 17.2474 12.4208C17.2877 11.5367 17.2972 11.2534 17.2972 9.0004C17.2972 6.74736 17.2877 6.46529 17.2474 5.57995C17.1123 2.57077 15.4388 0.893731 12.4225 0.755065C11.5372 0.713583 11.2539 0.704102 9.00089 0.704102C6.74785 0.704102 6.46578 0.713583 5.58044 0.755065C2.56652 0.892546 0.893034 2.56484 0.754367 5.57995C0.714071 6.46529 0.70459 6.74736 0.70459 9.0004C0.70459 11.2534 0.714071 11.5367 0.754367 12.4208C0.893034 15.4348 2.56533 17.1083 5.58044 17.2469C6.46578 17.2872 6.74785 17.2967 9.00089 17.2967C11.2539 17.2967 11.5372 17.2872 12.4225 17.2469ZM9.00089 2.19981C11.216 2.19981 11.4791 2.20692 12.3538 2.24721C14.6021 2.35032 15.651 3.41699 15.7553 5.64869C15.7944 6.52336 15.8027 6.78529 15.8027 9.0004C15.8027 11.2155 15.7944 11.4786 15.7553 12.3533C15.651 14.5838 14.6044 15.6528 12.3538 15.7548C11.4791 15.7951 11.2172 15.8034 9.00089 15.8034C6.78577 15.8034 6.52266 15.7939 5.64918 15.7548C3.39378 15.6517 2.35081 14.5803 2.2477 12.3533C2.20859 11.4774 2.19911 11.2155 2.19911 9.0004C2.19911 6.78529 2.20859 6.52336 2.2477 5.64869C2.35081 3.41581 3.39852 2.35032 5.64918 2.24721C6.52385 2.2081 6.78577 2.19981 9.00089 2.19981Z"
                  fill="#F7F5F4"
                ></path>
              </svg>
            </div>
            <div className="bg-[#2E2E32] w-8 h-8 flex justify-center items-center rounded-full cursor-pointer">
              <svg
                alt="X"
                width="18"
                height="18"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="bg-[#2E2E32] w-8 h-8 flex justify-center items-center rounded-full cursor-pointer">
              <svg
                alt="YouTube"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.73629 11.7981C6.224 11.9687 11.773 11.9687 14.2643 11.7981C16.9594 11.6132 17.2759 10.3012 17.2972 6.00015C17.2759 1.7074 16.963 0.387108 14.2643 0.202219C11.7742 0.0315521 6.224 0.0315521 3.73629 0.202219C1.04237 0.387108 0.724738 1.69911 0.70459 6.00015C0.724738 10.2929 1.03881 11.6132 3.73629 11.7981ZM6.6283 3.22455L12.4559 5.99552L6.6283 8.77596V3.22455Z"
                  fill="#F7F5F4"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <p className="text-white">
            More NASA Social Accounts
            
            </p>
            <p className="text-white py-3">NASA Newsletters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
