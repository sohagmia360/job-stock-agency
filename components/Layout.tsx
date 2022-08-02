import { NextPage } from "next";
import { useState } from "react";
import Hero from "../section/Hero";
import Header from "./Headers";
import SideDrawer from "./SideDrawer";



const  Layout  = ({children}: any) => {
  const [sideDrawer , setSideDrawer] = useState<boolean>(false)
  return (
    <div>
      <div>
          <Header sideDrawer={sideDrawer} setSideDrawer={setSideDrawer} />
          <SideDrawer  sideDrawer={sideDrawer} setSideDrawer={setSideDrawer}/>
           <div>
              {children}
           </div>
      </div>
    </div>
  );
}

export default Layout;