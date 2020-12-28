import { ITabbarRoute } from "../types/routeTypes";

import { HomeOutlined } from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';

import Home from "../pages/home";



const TabbarRoutes: ITabbarRoute[] = [
  {
    path:'/app/home',
    component: Home ,
    meta:{
      title:'首页',
      icon: HomeOutlined,
      selectedIcon: HomeIcon
    }
  }
]

export default TabbarRoutes;