import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import {AnimatePresence , motion } from "framer-motion"
import { BiChevronDown , BiChevronRight } from 'react-icons/bi';

interface Props {
  subM: { menu: string; subMenu?: { subMenuName: string; subMenuPath: string }[] };
}

const  MobileViewMenu: NextPage<Props> = ({subM}) => {

  const [openSubMenu , setOpenSubMenu] = useState<boolean>(false)


  
const variants = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
}

const menuItemAnimation = {
  hidden: (i : any) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i : any) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};


  const handleShowSubDropDown = (e : any)=> {
    console.log(e.target)
    setOpenSubMenu((prev)=> !prev)
  }


  return (
    <div className=" relative px-3 ">
        
        <div onClick={handleShowSubDropDown} className="text-xl  cursor-pointer font-bold flex items-center justify-between  text-light_gray_white mb-2">{subM.menu}
        {
          openSubMenu ? <BiChevronRight  className="text-2xl text-light_gray_white"  /> :<BiChevronDown  className="text-2xl text-light_gray_white" />
        }
        
        
        </div>

        <AnimatePresence>
      {
       
        openSubMenu && (
          <motion.div
          initial="hidden"
          variants={variants}
          animate="show"
          exit="hidden"
          className=''>

          {
              subM.subMenu?.map((sub , i)=> <motion.div 
              variants={menuItemAnimation}
              custom={i}
              className="text-[17px]  py-1 mx-2 hover:bg-[#e4f9f4] font-normal border-b-2 border-[#ebe6e681]" key={i}> <Link href="/">{sub.subMenuName}</Link> </motion.div> )
          }
        </motion.div>
        )
      }
      </AnimatePresence>
    </div>
  );
}

export default MobileViewMenu;