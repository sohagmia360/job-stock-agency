import InputBox from "../components/InputBox";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { SiGoogle } from "react-icons/si";
import { BsChevronDoubleDown } from "react-icons/bs";
import SocialButton from "../components/SocialButton";
import LetEmployersFindYou from "../section/LetEmployersFindYou";
import Footer from "../section/Footer";

const Login = () => {
  return (
    <div className=" ">
      <div>
        <div className="bg-[#F3F5F0] text-center py-16">
          <h4 className="text-4xl mb-3">Log In / Register</h4>
          <div className="flex flex-col  border-opacity-50 w-[60%] mx-auto lg:w-[40%]">
            <div className="divider">
              <BsChevronDoubleDown className="text-4xl text-light_green" />
            </div>
          </div>
          <p className="text-xl">Home Log In / Register</p>
        </div>
        <form
          action=""
          className=" w-[90%] md:w-[80%] lg:w-[50%] mx-auto mt-16 bg-light_white shadow-md p-6"
        >
          <h2 className="text-2xl mb-5 font-semibold text-light_gray_white">
            Login in Now
          </h2>
          <span className="inline-block p-2 rounded-full relative after:absolute after:w-8 after:h-8 after:animate-ping after:rounded-full  after:bg-light_green mb-2 after:top-0 after:left-0 bg-light_green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </span>
          <InputBox type="text" label="Email" />
          <InputBox type="text" label="Password" />
          <div className="flex md:flex-row flex-col justify-between items-center">
            <h5>
              <input className="mr-2" type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </h5>
            <h5 className="text-light_green font-semibold hover:underline">
              <Link href="/">Forgot My Password?</Link>
            </h5>
          </div>
          <button className="bg-light_green text-light_white font-semibold w-full py-3 rounded-lg mt-6">
            Login In Now
          </button>
          <div className="flex flex-col w-full border-opacity-50 my-6">
            <div className="divider">OR</div>
          </div>
          <SocialButton
            text="Login with Facebook"
            Icons={TiSocialFacebook}
            iconsColor={false}
          />
          <SocialButton
            text="Login with Google"
            Icons={SiGoogle}
            iconsColor={true}
          />
        </form>
        <LetEmployersFindYou />
        <Footer />
      </div>
    </div>
  );
};

export default Login;
