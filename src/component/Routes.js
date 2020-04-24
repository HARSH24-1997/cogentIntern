
import Activity from './Activity';
import Filter from './Filter';
import Profile from './Profile';
import Page404 from './Page404';
import Home from './Homepage';
import { FaHome } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdDirectionsTransit } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { TiContacts } from "react-icons/ti";

const Routes = [
  {
    path: '/home',
    sidebarName: 'Home',
    icon: FaHome,
    component: Home,
    id:'Intro',
  },
  {
    path: '/Profile',
    sidebarName: 'Profile',
    icon: FaBookReader,
    component: Profile,
    id:'Profile',
    
  },
  {
    path: '/Activity',
    sidebarName: 'Activity',
    icon: MdDirectionsTransit,
    component: Activity,
    id:'Activity',
  },
  {
    path: '/Favourite',
    sidebarName: 'Favourite',
    icon: MdDirectionsTransit,
    component: Page404,
    id:'Favoutite',
  },
  {
    path: '/TotalEarning',
    sidebarName: 'Total Earning',
    icon: MdDirectionsTransit,
    component: Page404,
    id:'TotalEarning',
  },
  {
    path: '/Filter',
    sidebarName: 'Filter',
    icon: MdDirectionsTransit,
    component: Filter,
    id:'Filter',
  },
  {
    path: '/Share',
    sidebarName: 'Share',
    icon: MdDirectionsTransit,
    component: Page404,
    id:'Share',
  },
  {
    path: '/LogOut',
    sidebarName: 'LogOut',
    icon: MdDirectionsTransit,
    component: Page404,
    id:'LogOut',
  },
];

export default Routes;