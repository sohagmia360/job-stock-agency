import { NextPage } from "next";
import CategoriesSingle from "../components/CategoriesSingle";
import CategoriesList from "../utility/CategoriesLIst";
import { BiChevronRight } from "react-icons/bi";

const Categories: NextPage = () => {
  return (
    <div className="mt-24">
      <div className=" wContainer  relative  after:w-[40px] after:h-[40px] after:absolute after:top-[0%] after:right-[30%] after:rounded-full before:w-[40px] before:h-[40px] before:absolute before:rounded-full   before:bg-light_green before:top-0 before:right-[30%] before:animate-ping  after:blur-[5px]  after:bg-light_green after:scale-50">
        <div className="text-center ">
          <h2 className="text-4xl  font-semibold mb-2">Browse Categories</h2>
          <p className="font-light">
            Most popular categories of portal, sorted by popularity
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-20 gap-7 md:gap-10">
          {CategoriesList.map((cate, index) => (
            <CategoriesSingle key={index} categories={cate} />
          ))}
        </div>
        <p className="text-center text-xl font-semibold text-light_green flex mt-5 underline mb-5 items-center justify-center">
          Browse All Categories <BiChevronRight />{" "}
        </p>
      </div>
    </div>
  );
};

export default Categories;
