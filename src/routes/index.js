import Home from '../views/home'
import Discovery from '../views/discovery'
import Mine from '../views/mine'
import Portfolio from '../views/portfolio'
const tabbarRoutes=[
  {
    path:'/app/home',
    component:Home,
    meta:{
      title:'首页',
    }
  },
  {
    path:'/app/discovery',
    component:Discovery,
    meta:{
      title:'发现',
    }
  },
  {
    path:'/app/portfolio',
    component:Portfolio,
    meta:{
      title:'作品集',
    }
  },
  {
    path:'/app/mine',
    component:Mine,
    meta:{
      title:'我的',
      // icon:ToolOutlined,
      // selectedIcon:ToolFilled
    }
  },
]

export {
  tabbarRoutes
}
