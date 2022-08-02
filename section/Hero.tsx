import type { NextPage } from "next";
import { GoLocation } from "react-icons/go";
import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import OrnamentImage1 from '../assets/images/testimonials-img3.jpg'
import OrnamentImage2 from '../assets/images/company-img4.jpg'
import OrnamentImage3 from '../assets/images/testimonials-img1.jpg'
import OrnamentImage4 from '../assets/images/home-three-icon1.png'
interface drawerType {
  sideDrawer: boolean;
  setSideDrawer: any;
}

const Hero: NextPage = () => {
  return (
    <div className="bg-[#F3F5F0] relative  after:bg-light_green after:absolute after:w-[70%] after:h-[60%] after:top-[20%] after:left-[30%] after:blur-[90px] after:opacity-[.1] w-full h-full ">
      <div className="flex px-6 md:px-2  items-center justify-between w-full  flex-col py-[150px] text-center line">
        <div className="relative hidden lg:block w-full h-full">
           <span className="absolute right-[3%]  sm:right-[5%]   lg:right-[10%] bottom-[-10px] md:bottom-[-40px] ">
              <Image  className="rounded-full" src={OrnamentImage1} width="100%"  height="100%" alt="image" />
           </span>
           <span className="absolute left-[3%]  sm:left-[5%]   lg:left-[10%] bottom-[-10px] md:bottom-[-40px] ">
              <Image  className="rounded-full" src={OrnamentImage2} width="50px"  height="50px" alt="image" />
           </span>
        </div>
        <div className=" text-[2rem]  md:text-[3.2rem] lg:text-[3.6rem]   leading-tight   md:text-5xl lg:text-6xl mb-3 text-light_black font-semibold ">
          <h2 className="mb-4">Searching For A Job? </h2>
          <h2 className="mb-4">Find the Perfect Job Near You</h2>
        </div>
        <div className="bg-light_white w-[90%]  md:w-[700px] px-5 lg:px-7 shadow-md mb-4 lg:py-3 py-6  rounded-md  flex items-center  lg:flex-row flex-col justify-around">
          <form className="relative w-full lg:mb-0 mb-6">
            <FiSearch className="text-2xl absolute top-[50%] transform -translate-y-[50%] left-2 pointer-events-none text-light_gray_white" />
            <input
              className="lg:border-r-2 w-full  py-3 bg-[#e4f9f4]  rounded-md lg:bg-transparent outline-none  md:w-[650px] lg:w-full  h-full border-[#2e2e2e1c] pl-10 lg:mr-2"
              type="text"
              name=""
              id=""
              placeholder="Keyword / Job Title"
            />
          </form>
          <form className="relative w-full lg:mb-0 mb-6">
            <GoLocation className="text-2xl absolute top-[50%] transform -translate-y-[50%] left-2 pointer-events-none text-light_gray_white" />
            <input
              className="lg:border-r-2 w-full   md:w-[650px]  rounded-md bg-[#e4f9f4] lg:bg-transparent lg:w-full   outline-none  py-3 border-[#2e2e2e1c] pl-10 lg:mr-2"
              type="text"
              name=""
              id=""
              placeholder="City or Postcode"
            />
          </form>
          <button
            className="text-center relative  after:bg-[#F3F5F0]   after:absolute after:top-[-10px] after:right-[-10px] after:w-[30px] after:h-[30px]  after:rounded-full before:bg-[#EA4335]   before:absolute before:top-[-5px] before:right-[-5px] before:w-[20px] before:h-[20px]  before:z-[5] before:rounded-full before:animate-ping after:rounded-ful outline-none self-start   w-full cursor-pointer  bg-light_green py-3 rounded-lg font-bold text-light_white text-md ml-2"
          >Find Job </button>
        </div>
        <div className="relative hidden lg:block w-full h-full">
           <span className="absolute right-[3%]  sm:right-[5%]   lg:right-[10%] bottom-[-10px] md:bottom-[-40px] ">
              <Image  className="rounded-full" src={OrnamentImage4} width="30px"  height="30px" alt="image" />
           </span>
           <span className="absolute after:absolute after:bg-[#cfcbcb] after:top-[50%] after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%] after:w-[170px] after:h-[170px] z-10 after:-z-[5] after:rounded-full  left-[3%]  sm:left-[5%]   lg:left-[10%] top-[-10px] md:top-[-30px] ">
              <Image  className="rounded-full   " src={OrnamentImage3} width="160px"  height="160px" alt="image" />
           </span>
        </div>
        <p>
          <strong>Popular Searches :</strong> Designer, Developer, Web, IOS,
          PHP, Senior, Engineer
        </p>
      </div>
    </div>
  );
};

export default Hero;
