import { BiChevronDown } from 'react-icons/bi';

interface MenuType {
  menu : string ;
  path : string;
  subMenu? : {subMenuName : string , subMenuPath : string}[];
}

const HeaderMenu: MenuType[] = [
  { 
    menu: "Home",
    path: "/", 
    // subMenu: [{ subMenuName :  "Job Listing" , subMenuPath: '/jobListing'}, { subMenuName :  "Job Finding" , subMenuPath: '/jobListing'}] 
  },

  { 
    menu: "Job",
    path: "/job",
    subMenu: [{ subMenuName :  "Job Listing" , subMenuPath: '/jobListing'}, { subMenuName :  "Post A Job" ,  subMenuPath: '/jobListing'} ,  { subMenuName :  "Job Listing" , subMenuPath: '/jobListing'}] 
  },
  {
    menu: "Employers",
    path: "/employers",
    subMenu: [{ subMenuName :  "Employers Listing" , subMenuPath: '/jobListing'}, { subMenuName :  "Employers Details" , subMenuPath: '/jobListing'}, { subMenuName :  "Employers Dashboard" , subMenuPath: '/jobListing'}] 
  },
  {
    menu: "Candidates",
    path: "/candidates",
    subMenu: [{ subMenuName :  "Candidates  Listing" , subMenuPath: '/jobListing'}, { subMenuName :  "Candidates  Details" , subMenuPath: '/jobListing'}, { subMenuName :  "Candidates  Dashboard" , subMenuPath: '/jobListing'}] 
  },
  {
    menu: "Blog",
    path: "/blog",
    subMenu: [{ subMenuName :  "Blog Grid" , subMenuPath: '/jobListing'}, { subMenuName :  "Blog Left Sidebar" , subMenuPath: '/jobListing'}, { subMenuName :  "Blog Right Sidebar" , subMenuPath: '/jobListing'}, { subMenuName :  "Blog Details" , subMenuPath: '/jobListing'} , { subMenuName :  "Categories" , subMenuPath: '/jobListing'}, { subMenuName :  "Tag" , subMenuPath: '/jobListing'}] 
  },
];

export default HeaderMenu;
