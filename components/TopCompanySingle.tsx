import { NextPage } from "next";
import Image from "next/image";
import { GoLocation } from "react-icons/go";

interface companyType {
  company: {
    name: string;
    location: string;
    openJob: string;
    image: any;
  };
}

const TopCompanySingle: NextPage<companyType> = ({ company }) => {
  return (
    <div className="">
      <div className="flex  bg-light_white shadow-sm p-4 rounded-xl  ">
        <div className="mr-5">
          <Image
            className="rounded-full"
            src={company.image}
            width="60px"
            height="60px"
            alt="image"
          />
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold ">{company.name}</h3>
          <span className="flex  items-center">
            <GoLocation className="text-xl text-light_green mr-2" />{" "}
            {company.location}
          </span>
          <span className="text-light_green ">
            Open jobs - ({company.openJob})
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopCompanySingle;
