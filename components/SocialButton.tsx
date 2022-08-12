const SocialButton = ({ text, Icons, iconsColor }: any) => {
  console.log(Icons);
  return (
    <button className=" mb-5 flex items-center text-lg  rounded-md hover:text-light_white hover:bg-light_green hover:border-transparent transition-all delay-150 ease-in group text-light_gray_white w-full border py-3 justify-center border-[#e7e7e7]">
      <Icons
        className={
          iconsColor
            ? "text-xl mr-4 text-[#fd5454] group-hover:text-light_white transition-all delay-100 ease-in"
            : "text-xl mr-4 text-[#25AFF3] group-hover:text-light_white transition-all delay-100 ease-in"
        }
      />
      {text}
    </button>
  );
};

export default SocialButton;
