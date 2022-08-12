import { NextPage } from "next";
import cvImage from "../assets/cv.png";
import Image from "next/image";

const LetEmployersFindYou: NextPage = () => {
  return (
    <div className="mt-32 ">
      <div className="wContainer">
        <div className="flex lg:flex-row flex-col  p-6 lg:justify-around  items-center bg-light_green  rounded-lg">
          <div className="lg:text-left text-center mb-6 lg:mb-0 ">
            <h2 className="md:text-3xl text-2xl text-light_white font-semibold ">
              Let Employers Find You
            </h2>
            <p className="text-light_white mb-5 text-sm">
              Advertise your jobs to millions of monthly users and search 15.8
              million CV in our database.
            </p>
            <button className="px-[20px] py-2 bg-light_white rounded-lg text-light_green font-bold">
              Upload Your CV
            </button>
          </div>
          <div className="">
            <Image src={cvImage} width="200" height="200px" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetEmployersFindYou;
