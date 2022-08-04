import { NextPage } from "next";

interface categoriesType {
  categories: {
    name: string;
    openPosition: number;
    icons: any;
    colorSub: string;
    colorMain: string;
  };
}

const CategoriesSingle: NextPage<categoriesType> = ({ categories }) => {
  return (
    <div className="   w-full py-4  px-7 mb-3">
      <div className="flex  bg-light_white py-4 translate-y-2 hover:-translate-y-2 transition-all group ease-linear delay-200   items-center border-[1px] rounded-md border-[#eee8e8]">
        <div
          style={{
            color: categories.colorMain,
            backgroundColor: categories.colorSub,
          }}
          className="  h-20 px-4 flex items-center justify-center rounded-lg -translate-y-10 mx-4"
        >
          {<categories.icons className={`text-4xl`} />}{" "}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-light_green transition-all delay-200 ease-linear">
            {categories.name}
          </h3>
          <p className="text-md">
            ( {categories.openPosition} is open position )
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSingle;
