import { NextPage } from "next";
import { useEffect, useState } from "react";
import BackDrop from "./BackDrop";


interface  drawerType {
  sideDrawer : boolean ,
  setSideDrawer : any
}

const  SideDrawer: NextPage<drawerType> = ({sideDrawer , setSideDrawer})=> {

  useEffect(()=>{
    window.addEventListener('resize', (e)=> {
      if(window.innerWidth >= 1051){
        setSideDrawer(false)
      }
    })
  },[])

  return (
    <div>
      <div className={sideDrawer ? '  transition-all  ease-in delay-150 transform -translate-x-[0%] z-50 top-0 fixed border-2  border-r-light_green  left-0 w-[230px] bg-light_white h-[100vh] shadow-md p-3' : 'fixed transform transition-all  ease-in delay-150 -translate-x-[100%] z-50 top-0 left-0 w-[200px] bg-light_white h-[100vh] shadow-md p-3'}>
          link
      </div>
      {
        sideDrawer ?
        <BackDrop sideDrawer={sideDrawer} setSideDrawer={setSideDrawer} />
        :
        null
      }
      </div>
  );
}

export default SideDrawer;