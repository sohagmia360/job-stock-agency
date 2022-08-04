import { NextPage } from "next";
import { GoLocation } from 'react-icons/go';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link'



const  Footer:NextPage = ()=> {
  return (
    <div className="mt-28 bg-[#F5FBF6] py-16">
      <div className="wContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-6">
          <div className="flex items-center justify-center">
              <div>
              <h2 className="text-2xl mb-3 font-semibold"><span className="font-bold text-light_green">Job</span> Stock</h2>
             <div className="flex flex-col gap-3 text-light_gray_white">
                  <span className="flex items-center">
                      <GoLocation  className="text-xl text-light_green mr-3"    />
                      328 Queensberry Street, North Melbourne VIC
                  </span>
                  <span className="flex items-center">
                      <MdOutlineMail  className="text-xl text-light_green mr-3"   />
                      sohag.zayan@gmail.com
                  </span>
                  <span className="flex items-center">
                      <FaPhone  className="text-xl text-light_green mr-3 "  />
                      +8801980796731
                  </span>
             </div>
              </div>
          </div>
          <div className="flex items-center justify-center">
           <div>
           <h2 className="text-2xl mb-3 font-semibold">For Employer</h2>
             <div className="flex flex-col gap-3 text-light_gray_white">
                <span><Link href="/">Browse Candidates</Link></span>
                <span><Link href="/">Employer Dashboard</Link></span>
                <span><Link href="/">Job Packages</Link></span>
                <span><Link href="/">Browse Candidates</Link></span>
                <span><Link href="/">Jobs Featured</Link></span>
                <span><Link href="/">Post A Job</Link></span>
             </div>
           </div>
          </div>
          <div className="flex items-center justify-center">
           <div>
           <h2 className="text-2xl mb-3 font-semibold">For Candidates</h2>
             <div className="flex flex-col gap-3 text-light_gray_white">
                <span><Link href="/">Browse Jobs</Link></span>
                <span><Link href="/">Submit Resume</Link></span>
                <span><Link href="/">Candidates Dashboard</Link></span>
                <span><Link href="/">Browse Categories</Link></span>
                <span><Link href="/">Jobs Featured</Link></span>
                <span><Link href="/">Candidate Listing</Link></span>
             </div>
           </div>
          </div>
          <div className="flex items-center justify-center">
           <div>
           <h2 className="text-2xl mb-3 font-semibold">Company</h2>
             <div className="flex flex-col gap-3 text-light_gray_white">
                <span><Link href="/">About Us</Link></span>
                <span><Link href="/">Contact Us</Link></span>
                <span><Link href="/">Terms & Conditions</Link></span>
                <span><Link href="/">Privacy Policy</Link></span>
                <span><Link href="/">Candidate Listing</Link></span>
             </div>
           </div>
          </div>
          <div className="flex items-center justify-center">
             <div>
             <h2 className="text-2xl mb-3 font-semibold">Quick Links</h2>
             <div className="flex flex-col gap-3 text-light_gray_white">
                <span><Link href="/">Jobs Listing</Link></span>
                <span><Link href="/">Employer Listing</Link></span>
                <span><Link href="/">Post New Job</Link></span>
                <span><Link href="/">All Employers</Link></span>
                <span><Link href="/">Featured Jobs</Link></span>
             </div>
             </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;