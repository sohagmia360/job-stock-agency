import { NextPage } from "next";
import TopCompanySingle from "../components/TopCompanySingle";
import TopCompanyList from "../utility/TopCompanyList";
import building from "../assets/buildings.png";
import Image from "next/image";
const TopCompanyRegistered: NextPage = () => {
  return (
    <div className="mt-32">
      <div className="wContainer text-center">
        <h2 className="text-3xl font-bold mb-4 ">Top Company Registered </h2>
        <p>
          We collect reviews from our users so you can get an honest opinion
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {TopCompanyList.map((company, index) => (
            <TopCompanySingle key={index} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompanyRegistered;
