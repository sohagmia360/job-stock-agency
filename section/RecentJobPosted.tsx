import { NextPage } from "next";
import RecentJobSinglePosted from "../components/RecentJobSinglePosted";
import RecentJobPostedList from "../utility/RecentJobPostedList";
import { BiChevronRight } from "react-icons/bi";



const  RecentJobPosted:NextPage = ()=> {
  return (
    <div className="mt-52 px-3 bg-[#F5FBF6] py-20">
      <div className=" wContainer ">
        <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-2">Recent Job Posted</h2>
            <p >We collect reviews from our users so you can get an honest opinion of <br /> what an experience with our website are really like!</p>
        </div>

        <div>
          {
            RecentJobPostedList.map((job , index)=> <RecentJobSinglePosted key={index} job={job} /> ) 
          }
        </div>
            <span className="text-center underline cursor-pointer text-light_green flex  items-center justify-center text-xl mt-10 ">Browse All Job Post <BiChevronRight className="ml-1" /> </span>
      </div>
    </div>
  );
}

export default RecentJobPosted;