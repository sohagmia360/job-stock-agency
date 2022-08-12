const InputBox = ({ type, label }: any) => {
  return (
    <div className="mb-5">
      <div className="flex flex-col">
        <label
          className="font-medium text-light_gray_white text-lg mb-1"
          htmlFor=""
        >
          {label}
        </label>
        <input
          className="py-3 rounded-lg outline-none text-light_gray_white px-5 bg-[#F8F8F8]"
          type={type}
        />
      </div>
    </div>
  );
};

export default InputBox;
