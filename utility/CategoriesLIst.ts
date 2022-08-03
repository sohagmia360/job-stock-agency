import { RiComputerLine } from "react-icons/ri";
import {
  MdManageAccounts,
  MdOutlineDesignServices,
  MdBookmarkAdd,
} from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { HiOutlineCode } from "react-icons/hi";

const CategoriesList = [
  { name: "Accountancy", openPosition: 33, icons: RiComputerLine , colorSub : '#E4E4FA' , colorMain : '#4D49DC' },
  { name: "Project Manager", openPosition: 20, icons: MdManageAccounts ,colorSub : '#FEEDDD' , colorMain : '#FA871C'},
  { name: "Marketing & SEO", openPosition: 55, icons: MdBookmarkAdd , colorSub : '#E4FAFC' , colorMain : '#49DEEE'},
  { name: "Digital Service Jobs", openPosition: 66, icons: RiSettings4Line , colorSub : '#FEDDE2' , colorMain : '#F71E3F'},
  { name: "Web Development", openPosition: 134, icons: HiOutlineCode , colorSub : '#D9F7F0' , colorMain : '#00CA99'},
  { name: "GraphDesign", openPosition: 345, icons: MdOutlineDesignServices , colorSub : '#FFF4D9' , colorMain : '#FFB300'},
];

export default CategoriesList;
