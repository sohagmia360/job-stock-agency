import { NextPage } from "next";
import { useEffect, useState } from "react";
import BackDrop from "./BackDrop";
import menuList from '../utility/menuList'
import Link from "next/link";
import MobileViewMenu from "./MobileViewMenu";

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
      <div className={sideDrawer ? '  transition-all  ease-in delay-150 transform -translate-x-[0%] z-50 top-0 fixed  left-0 w-[250px] bg-light_white h-[100vh] shadow-md ' : 'fixed transform transition-all  ease-in delay-150 -translate-x-[100%] z-50 top-0 left-0 w-[250px] bg-light_white h-[100vh] shadow-md '}>
          

          <div>
              <h5 className="font-bold text-2xl px-4 pt-5 text-light_gray_white">Job <span className="text-light_green">Stock</span> </h5>

              <div className="mt-10">
                  {
                    menuList.map((m , index)=> {
                      if(m.subMenu){
                        return <MobileViewMenu subM={m} /> 
                      }else{
                        return (
                          <div className="text-xl font-bold bg-[#e7e4e475] text-light_gray_white mb-2 border-b-2 p-3 border-[#f1ecec]" key={index}>
                          <Link href='/'>{m.menu}</Link>
                          </div>
                        )
                      }
                    })
                  }
              </div>


          </div>
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