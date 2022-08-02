import { NextPage } from "next";


interface  drawerType {
  sideDrawer : boolean ,
  setSideDrawer : any
}

const  BackDrop:NextPage<drawerType> = ({sideDrawer , setSideDrawer})=> {
  return (
    <div onClick={()=> setSideDrawer(false)} className="backDrop">

    </div>
  );
}

export default BackDrop;