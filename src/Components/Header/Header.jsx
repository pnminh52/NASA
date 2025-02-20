import React from 'react';

const Header = () => {
  return (
    <div className="h-21 bg-black  px-8 mx-auto">
      <div className="block sm:hidden flex justify-between items-center h-full">
        {/* Mobile Menu Icon */}
        <div className="cursor-pointer  md:hidden">
         <button>
            <div className='space-y-1 cursor-pointer'>
                <div className='w-5 h-[2px] rounded-full bg-white'></div>
                <div className='w-5 h-[2px] rounded-full bg-white'></div>
                <div className='w-5 h-[2px] rounded-full bg-white'></div>
            </div>
         </button>
        </div>

        {/* NASA Logo */}
        <img
          className="w-auto h-13 cursor-pointer"
          src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo@2x.png"
          alt="NASA"
        />

        {/* Placeholder */}
        <div>
        <svg className='hover:fill-white duration-300 cursor-pointer' width="24" height="24" viewBox="0 0 12 12" fill="#C1C1C1" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.643L8.804 7.447a4.8 4.8 0 10-1.357 1.357L10.642 12 12 10.643zM1.36 4.8a3.44 3.44 0 116.879 0 3.44 3.44 0 01-6.879 0z"></path></svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
