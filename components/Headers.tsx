import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BlogImage from "../assets/images/blog-img1.jpg";
import styles from "../styles/headers.module.css";
import menuList from "../utility/menuList";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineLogin } from "react-icons/md";
import NavMenu from "../components/NavMenu";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { BiHandicap } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";

const subMenu: { name: string; path: string }[] = [
  { name: "sub menu 1", path: "/sub" },
  { name: "sub menu 2", path: "/sub" },
];

interface drawerType {
  sideDrawer: boolean;
  setSideDrawer: any;
}

const Header: NextPage<drawerType> = ({ sideDrawer, setSideDrawer }) => {
  const [profile, setProfile] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [navSticky, setNavSticky] = useState<boolean>(false);
  const handleProfile = () => {
    setProfile((prev) => !prev);
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setProfile(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 65) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    });
  }, []);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div
        ref={wrapperRef}
        className={
          navSticky
            ? ` ${styles.animationHeder} z-20 shadow-md   transition-all ease-in delay-150 bg-[#fff] px-1 sticky top-0`
            : `  shadow-md transition-all ease-in delay-150  bg-[#F3F5F0] px-1 `
        }
      >
        <div className="navbar wContainer ">
          <div className="flex-1 cursor-pointer ">
            <a className=" flex items-center justify-center normal-case text-xl">
              <span className="text-light_gray_white font-bold text-md sm:text-2xl">
                <span className="text-light_green">Job</span> Stack
              </span>
            </a>
            <div
              className={` ${styles.HeaderMenu} flex text-light_gray_white items-center gap-8 font-normal text-[1.2rem] ml-10 `}
            >
              {menuList.map((m, index) => {
                if (m.subMenu) {
                  return <NavMenu key={index} m={m} />;
                } else {
                  return (
                    <div key={index} className="py-3">
                      <Link key={m.menu} href="/">
                        {m.menu}
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="flex-none gap-2 transition-all  ease-in delay-150">
            <div className=" mr-4">
              <button className="bg-transparent border-2 border-light_green  text-light_gray_white px-3 py-1 font-bold text-lg rounded-lg relative after:absolute after:w-full after:h-full after:bg-light_green after:rounded-lg after:top-0 after:left-0 transform after:scale-50 after:opacity-0 hover:after:opacity-100 hover:after:scale-100 transition-all ease-in delay-100 hover:after:transition-all hover:after:ease-in after:transition-all after:ease-in after:delay-100 hover:text-light_white hover:after:delay-100 z-20 after:-z-10  hover:border-transparent flex items-center ">
                <span className=" hidden sm:block ">Login</span>{" "}
                <MdOutlineLogin className="text-xl" />{" "}
              </button>
            </div>
            <div className="dropdown dropdown-end relative z-50 flex items-center">
              <label
                onClick={handleProfile}
                className="flex items-center cursor-pointer"
              >
                <div className="w-10 rounded-full  relative ">
                  <Image
                    width="100%"
                    height="100%"
                    src={BlogImage}
                    alt="images"
                    className="rounded-full"
                  />
                </div>
                <span className="ml-2 text-light_gray_white flex items-center ">
                  Hi,John <BiChevronDown />{" "}
                </span>
              </label>

              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: sideDrawer ? 0.7 : 1,
                  scale: sideDrawer ? 0.5 : 1.6,
                }}
                transition={{ duration: 0.4 }}
                className={styles.drawerMenu}
              >
                <FiMenu
                  onClick={() => setSideDrawer(true)}
                  className="text-2xl "
                />
              </motion.div>

              <ul
                className={
                  profile ? styles.profileEnable : styles.profileDisable
                }
              >
                <li className="border-b-[1px] border-[#F0F0F0]">
                  <a className="">
                    <span className="bg-[#F0F0F0] rounded-full p-2">
                      <RiDashboardLine className="text-xl" />
                    </span>
                    Dashboard
                  </a>
                </li>
                <li className="border-b-[1px] border-[#F0F0F0]">
                  <a className="">
                    <span className="bg-[#F0F0F0] rounded-full p-2">
                      <BiHandicap className="text-xl" />
                    </span>
                    Manage Jobs Post
                  </a>
                </li>
                <li className="border-b-[1px] border-[#F0F0F0]">
                  <a className="">
                    <span className="bg-[#F0F0F0] rounded-full p-2">
                      <FiUsers className="text-xl" />
                    </span>
                    Manage Jobs
                  </a>
                </li>
                <li className="border-b-[1px] border-[#F0F0F0]">
                  <a className="">
                    <span className="bg-[#F0F0F0] rounded-full p-2">
                      <AiOutlineStar className="text-xl" />
                    </span>
                    Bookmarks Jobs
                  </a>
                </li>
                <li className="border-b-[1px] border-[#F0F0F0]">
                  <a className="">
                    <span className="bg-[#F0F0F0] rounded-full p-2">
                      <FaUserSecret className="text-xl" />
                    </span>
                    My Profile
                  </a>
                </li>
                <li className="">
                  <a className="">
                    <span className="bg-[#F0F0F0] rounded-full p-2 rotate-[90deg]">
                      <AiOutlineLogin className="text-xl" />
                    </span>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
