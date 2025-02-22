import React from "react";

const Content = () => {
  return (
    <div className="block sm:hidden">
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
              <div className="py-3 space-y-4">
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
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
                      News Release
                    </p>
                  </div>
                  <div className="absolute bottom-6 px-6 space-y-2">
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
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
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
                      News Release
                    </p>
                  </div>
                  <div className="absolute bottom-6 px-6 space-y-2">
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
                      4 Min Read
                    </p>

                    <p className="text-white leading-[1.1] font-bold text-lg">
                      NASA Sets Launch Coverage for Missions Studying Cosmic
                      Origins, Sun
                    </p>
                  </div>
                </div>
                <div className="relative  w-full cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                  <img
                    className="w-full min-h-[200px]  max-h-[220px] object-cover"
                    src="https://www.nasa.gov/wp-content/uploads/2025/02/nhq202411220001large.jpg?resize=720,900"
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
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
                      News Release
                    </p>
                  </div>
                  <div className="absolute bottom-6 px-6 space-y-2">
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
                      4 Min Read
                    </p>

                    <p className="text-white leading-[1.1] font-bold text-lg">
                      NASA Associate Administrator Jim Free to Retire After 30
                      Years Service
                    </p>
                  </div>
                </div>
                <div className="relative  w-full cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                  <img
                    className="w-full min-h-[200px]  max-h-[220px] object-cover"
                    src="https://www.nasa.gov/wp-content/uploads/2025/02/1-pia26457-ltb-moon-lms.jpg?resize=1024,576"
                    alt=""
                  />
                  <div className="absolute top-6 left-6 flex gap-2 items-center">
                    <svg
                      version="1.1"
                      className="w-4 h-4 fill-white"
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
                        <g>
                          <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2 C4,15.2,0.8,12,0.8,8C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z"></path>
                          <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z"></path>
                        </g>
                      </g>
                    </svg>
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
                      Article
                    </p>
                  </div>
                  <div className="absolute bottom-6 px-6 space-y-2">
                    <p
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className="text-white text-[11px] uppercase tracking-[4px]"
                    >
                      6 Min Read
                    </p>

                    <p className="text-white leading-[1.1] font-bold text-lg">
                      How NASA’s Lunar Trailblazer Will Make a Looping Voyage to
                      the Moon
                    </p>
                  </div>
                </div>
                <div className="py-6 space-y-8">
                  <div className=" flex space-x-4 items-center ">
                    <div>
                      <img
                        className="cursor-pointer rounded-full max-w-[80px] h-auto object-cover flex-shrink-0"
                        src="https://www.nasa.gov/wp-content/uploads/2025/02/pla-paf-edu-move-to-4697-west-test-area-13.jpg?resize=150,150"
                        alt=""
                      />
                    </div>
                    <div className="cursor-pointer space-y-1">
                      <p
                        className="uppercase text-xs tracking-[3px]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        5 Min Read
                      </p>
                      <p
                        className="font-semibold text-xs leading-[1.4]"
                        style={{ fontFamily: "'Public Sans Web', sans-serif" }}
                      >
                        NASA Readies Moon Rocket for the Future with
                        Manufacturing Innovation
                      </p>
                      <div className="flex gap-2 items-center fill-[#58585B]">
                        <svg
                          version="1.1"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <g>
                              <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2C4,15.2,0.8,12,0.8,8 C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z"></path>
                              <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z"></path>
                            </g>
                          </g>
                        </svg>
                        <p
                          className="text-gray-700 uppercase text-xs tracking-[3px]"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          Article
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-center ">
                    <div>
                      <img
                        className="cursor-pointer rounded-full max-w-[80px] h-auto object-cover flex-shrink-0"
                        src="https://www.nasa.gov/wp-content/uploads/2025/02/1-webb-molecular-cloud-ices.png?resize=150,150"
                        alt=""
                      />
                    </div>
                    <div className="cursor-pointer space-y-1">
                      <p
                        className="uppercase text-xs tracking-[3px]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        5 Min Read
                      </p>
                      <p
                        className="font-semibold text-xs leading-[1.4]"
                        style={{ fontFamily: "'Public Sans Web', sans-serif" }}
                      >
                        NASA’s SPHEREx Space Telescope Will Seek Life’s
                        Ingredients
                      </p>
                      <div className="flex gap-2 items-center fill-[#58585B]">
                        <svg
                          version="1.1"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <g>
                              <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2C4,15.2,0.8,12,0.8,8 C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z"></path>
                              <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z"></path>
                            </g>
                          </g>
                        </svg>
                        <p
                          className="text-gray-700 uppercase text-xs tracking-[3px]"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          Article
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-center ">
                    <div>
                      <img
                        className="cursor-pointer max-w-[80px] h-[80px] rounded-full object-cover"
                        src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/webb/science/2025/webb-STScI-01JKDQABVK79V1BBDZ8KHSDTJ9-1K.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cursor-pointer space-y-1">
                      <p
                        className="uppercase text-xs tracking-[3px]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        5 Min Read
                      </p>
                      <p
                        className="font-semibold text-xs leading-[1.4]"
                        style={{ fontFamily: "'Public Sans Web', sans-serif" }}
                      >
                        Webb Maps Full Picture of How Phoenix Galaxy Cluster
                        Forms Stars
                      </p>
                      <div className="flex gap-2 items-center fill-[#58585B]">
                        <svg
                          version="1.1"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <g>
                              <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2C4,15.2,0.8,12,0.8,8 C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z"></path>
                              <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z"></path>
                            </g>
                          </g>
                        </svg>
                        <p
                          className="text-gray-700 uppercase text-xs tracking-[3px]"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          Article
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-center ">
                    <div>
                      <img
                        className="cursor-pointer max-w-[80px] h-[80px] rounded-full object-cover"
                        src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar-system/skywatching/2025/february/Orion_credit_Preston%20Dyches_CC%20BY-NC%202.0.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cursor-pointer space-y-1">
                      <p
                        className="uppercase text-xs tracking-[3px]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        5 Min Read
                      </p>
                      <p
                        className="font-semibold text-xs leading-[1.4]"
                        style={{ fontFamily: "'Public Sans Web', sans-serif" }}
                      >
                        What’s Up: February 2025 Skywatching Tips from NASA
                      </p>
                      <div className="flex gap-2 items-center fill-[#58585B]">
                        <svg
                          version="1.1"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <g>
                              <path d="M8,0C3.5,0-0.1,3.7,0,8.2C0.1,12.5,3.6,16,8,16c4.4,0,8-3.6,8-8C16,3.5,12.4,0,8,0z M8,15.2C4,15.2,0.8,12,0.8,8 C0.8,4,4,0.8,8,0.8c3.9,0,7.2,3.2,7.2,7.1C15.2,11.9,12,15.2,8,15.2z"></path>
                              <path d="M5.6,12c0.8-0.8,1.6-1.6,2.4-2.4c0.8,0.8,1.6,1.6,2.4,2.4c0-2.7,0-5.3,0-8C8.8,4,7.2,4,5.6,4 C5.6,6.7,5.6,9.3,5.6,12z"></path>
                            </g>
                          </g>
                        </svg>
                        <p
                          className="text-gray-700 uppercase text-xs tracking-[3px]"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          Article
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        <img
          className="h-[700px] w-auto object-cover"
          src="https://www.nasa.gov/wp-content/uploads/2025/02/2024yr4-discovery-atlas.gif?w=650"
          alt=""
        />
        <div className="absolute top-[35%] px-10 space-y-4">
          <p
            className="text-white font-bold text-[45px] leading-[1.0]"
            style={{ fontFamily: '"inter", sans-serif' }}
          >
            Capturing Iconic Moments
          </p>
          <p
            className="text-white "
            style={{ fontFamily: '"inter", sans-serif' }}
          >
            Capturing NASA’s most iconic moments takes more than just a good
            camera; it takes experience, timing, and a sharp eye. In the latest
            episode of "Small Steps, Giant Leaps," Bill Ingalls, senior
            photographer for NASA Headquarters in Washington, discusses the
            importance of visual storytelling.
          </p>
          <div className="flex gap-2 items-center group">
            <p
              className="text-white font-semibold text-2xl cursor-pointer"
              style={{ fontFamily: '"inter", sans-serif' }}
            >
              Listen
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
      <div className="px-10">
        <div className="block sm:hidden">
          <div className="py-10">
            <div>
              <p
                className="text-3xl font-bold text-[#1b1b1b]"
                style={{ fontFamily: '"inter", sans-serif' }}
              >
                Multimedia
              </p>
            </div>
            <div className=" mt-6">
              <div className="flex group items-center gap-2">
                <p
                  className=" font-bold cursor-pointer text-xl"
                  style={{ fontFamily: '"inter", sans-serif' }}
                >
                  Discover More
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
              <div className="py-3 space-y-4">
                <div className="relative  w-full cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                  <img
                    className="w-auto min-h-[600px] object-cover"
                    src="https://www.nasa.gov/wp-content/uploads/2015/06/gpn-2001-000014.jpg?resize=600,483"
                    alt=""
                  />
                  <div className="absolute top-6 left-6 flex gap-2 items-center"></div>
                  <div className="absolute flex gap-2 items-center bottom-6 px-6 ">
                    <p className="text-white leading-[1.1] font-bold text-[22px]">
                      NASA Images
                    </p>
                    <svg
                      className="w-5 transition duration-300  bg-[#F64137] cursor-pointer rounded-full h-5 rotate-360"
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
                <div className="relative  w-full cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                  <img
                    className="w-auto min-h-[600px] object-cover"
                    src="https://www.nasa.gov/wp-content/uploads/2023/07/52945857760-666c5484fe-o.webp?resize=600,400"
                    alt=""
                  />
                  <div className="absolute top-6 left-6 flex gap-2 items-center"></div>
                  <div className="absolute flex gap-2 items-center bottom-6 px-6 ">
                    <p className="text-white leading-[1.1] font-bold text-[22px]">
                      Mobile and Desktop Apps
                    </p>
                    <svg
                      className="w-5 transition duration-300  bg-[#F64137] cursor-pointer rounded-full h-5 rotate-360"
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
                <div className="relative  w-full cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                  <img
                    className="w-auto min-h-[600px] object-cover"
                    src="https://www.nasa.gov/wp-content/uploads/2023/10/callie-in-lunar-lava-tunnel-page-2.png?resize=600,367"
                    alt=""
                  />
                  <div className="absolute top-6 left-6 flex gap-2 items-center"></div>
                  <div className="absolute flex gap-2 items-center bottom-6 px-6 ">
                    <p className="text-white leading-[1.1] font-bold text-[22px]">
                      Games and Interactives
                    </p>
                    <svg
                      className="w-5 transition duration-300  bg-[#F64137] cursor-pointer rounded-full h-5 rotate-360"
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
                <div className="relative  w-full cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
                  <img
                    className="w-auto min-h-[600px] object-cover"
                    src="https://www.nasa.gov/wp-content/uploads/2023/05/52054927331-8c3dfd6fec-k.jpg?resize=600,400"
                    alt=""
                  />
                  <div className="absolute top-6 left-6 flex gap-2 items-center"></div>
                  <div className="absolute flex gap-2 items-center bottom-6 px-6 ">
                    <p className="text-white leading-[1.1] font-bold text-[22px]">
                      e-Books
                    </p>
                    <svg
                      className="w-5 transition duration-300  bg-[#F64137] cursor-pointer rounded-full h-5 rotate-360"
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
      </div>
    </div>
  );
};

export default Content;
