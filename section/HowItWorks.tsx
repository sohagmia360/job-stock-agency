import { NextPage } from "next";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiTrophyCup } from "react-icons/gi";

const HowItWorks: NextPage = () => {
  return (
    <div className="mt-28">
      <div className="wContainer">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">How It Works?</h2>
          <p className="md:w-[50%] md:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque
            dignissim quam et metus effici turac fringilla lorem facilisis.
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-8 ">
          <div className="flex flex-col items-center text-center px-5">
            <AiOutlineUser className="text-6xl text-light_green mb-4" />
            <h3 className="text-xl font-bold mb-2">Create an Account</h3>
            <p>
              Post a job to tell us about your project. We will quickly match
              you with t right freelancers find place best.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-5">
            <FiSearch className="text-6xl text-light_green mb-4" />
            <h3 className="text-xl font-bold mb-2">Create an Account</h3>
            <p>
              Post a job to tell us about your project. We will quickly match
              you with t right freelancers find place best.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-5">
            <GiTrophyCup className="text-6xl text-light_green mb-4" />
            <h3 className="text-xl font-bold mb-2">Create an Account</h3>
            <p>
              Post a job to tell us about your project. We will quickly match
              you with t right freelancers find place best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
