import { NextPage } from "next";
import Image from "next/image";
import { GiConcreteBag } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import styles from '../styles/RecentJobPosted.module.css'
import { motion } from "framer-motion"


interface RecentJobType {
  job: {
    name: string;
    category: string;
    location: string;
    date: string;
    salaryRangeMin: number;
    salaryRangeMax: number;
    salaryPer: string;
    jobTime: string;
    jobPosition: string;
    impolyNeeded: string;
    image: any;
  };
}

const RecentJobSinglePosted: NextPage<RecentJobType> = ({ job }) => {
  return (
    <motion.div 
        whileHover={{ y: '-10%' }}
        whileTap={{ y: '56%' }}

    className="group">
      <div className="mt-7  bg-light_white p-5 rounded-lg shadow-sm ">
        <div className="flex  sm:items-center sm:flex-row flex-col  ">
          <div className="sm:mr-10 mb-6 sm:mb-0">
            <Image
              className="rounded-full"
              src={job.image}
              width="100px"
              height="100px"
              alt="logo"
            />
          </div>
          <div className="w-full">
            <div>
              <h2 className="text-2xl group-hover:text-light_green transition-all ease-in delay-75 mb-3">{job.name}</h2>
            </div>
            <div className="flex flex-wrap">
              <div className={`flex ${styles.informationPart}`}>
                <div>
                  <div className="flex items-center flex-wrap">
                    <span className="flex items-center mr-2 sm:mr-5">
                      <GiConcreteBag className="sm:mr-2 mr-1 text-light_green" />
                      {job.category}
                    </span>
                    <span className="flex items-center mr-2 sm:mr-5">
                      <HiOutlineLocationMarker className="sm:mr-2 mr-1 text-light_green" />
                      {job.location}
                    </span>
                    <span className="flex items-center mr-2 md:mr-5">
                      <FiClock className="md:mr-2 mr-1 text-light_green" />
                      {job.date}
                    </span>
                  </div>
                </div>
                <div className={styles.pricePart}>
                  <h5>
                    ${job.salaryRangeMin} - ${job.salaryRangeMax} / salaryPer
                  </h5>
                </div>
              </div>

              <div className={`ml-auto mr-5 ${styles.statusPart}`}>
                <span className="mr-7 bg-[#E5FAF5] px-3 py-2 rounded-lg text-[#00CA99]">
                  {job.jobTime}
                </span>
                <span className="mr-7 bg-[#FFEFED] px-3 py-2 rounded-lg text-[#FF5B4A]">
                  {job.jobPosition}
                </span>
                <span className=" bg-[#FFEDF6] px-3 py-2 rounded-lg text-[#C90000]">
                  {job.impolyNeeded}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentJobSinglePosted;
