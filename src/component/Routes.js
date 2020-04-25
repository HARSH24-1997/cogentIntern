
import Activity from './Activity';
import Filter from './Filter';
import Profile from './Profile';
import Page404 from './Page404';
import Home from './Homepage';
import { GoHome } from "react-icons/go";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrFilter } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";

const Routes = [
  {
    path: '/Home',
    sidebarName: 'Home',
    icon: GoHome,
    component: Home,
    id:'Intro',
  },
  {
    path: '/Profile',
    sidebarName: 'Profile',
    icon: MdPersonOutline,
    component: Profile,
    id:'Profile',
    
  },
  {
    path: '/Activity',
    sidebarName: 'Activity',
    icon: AiOutlineBarChart,
    component: Activity,
    id:'Activity',
  },
  {
    path: '/Favourite',
    sidebarName: 'Favourite',
    icon: BsHeart,
    component: Page404,
    id:'Favoutite',
  },
  {
    path: '/TotalEarning',
    sidebarName: 'Total Earning',
    icon: GiTakeMyMoney,
    component: Page404,
    id:'TotalEarning',
  },
  {
    path: '/Filter',
    sidebarName: 'Filter',
    icon: GrFilter,
    component: Filter,
    id:'Filter',
  },
  {
    path: '/Share',
    sidebarName: 'Share',
    icon:AiOutlineShareAlt,
    component: Page404,
    id:'Share',
  },
  {
    path: '/LogOut',
    sidebarName: 'Logout',
    icon: IoIosLogOut,
    component: Page404,
    id:'LogOut',
  },
];

export default Routes;