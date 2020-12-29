import { ITabbarRoute } from "../constantTypes/routeTypes";

import { Collections, CollectionsOutlined, HomeOutlined, Person, PersonOutlined, Search, SearchOutlined } from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';

import Home from "../pages/home";
import Discovery from "../pages/discovery";
import Portfolio from "../pages/portfolio";
import Mine from "../pages/mine";



const TabbarRoutes: ITabbarRoute[] = [
  {
    path:'/app/home',
    component: Home ,
    meta: {
      title:'首页',
      icon: HomeOutlined,
      selectedIcon: HomeIcon
    }
  },
  {
    path:'/app/discovery',
    component: Discovery ,
    meta: {
      title:'发现',
      icon: SearchOutlined,
      selectedIcon: Search,
    }
  },
  {
    path:'/app/portfolio',
    component: Portfolio ,
    meta: {
      title:'作品集',
      icon: CollectionsOutlined,
      selectedIcon: Collections,
    }
  },{
    path:'/app/mine',
    component: Mine ,
    meta: {
      title:'我的',
      icon: PersonOutlined,
      selectedIcon: Person
    }
  }
]

export default TabbarRoutes;