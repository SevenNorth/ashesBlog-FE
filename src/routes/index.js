import { 
  HomeOutlined,
  HomeFilled,
  FolderOutlined,
  FolderOpenFilled,
  EditOutlined,
  EditFilled,
  ToolFilled,
  ToolOutlined
  } from '@ant-design/icons'

import Home from '../views/home'
import Category from '../views/category'
import Todo from '../views/todo'
import Admin from '../views/admin'
const tabbarRoutes=[
  {
    path:'/app/home',
    component:Home,
    meta:{
      title:'首页',
      icon:HomeOutlined,
      selectedIcon:HomeFilled
    }
  },
  {
    path:'/app/category',
    component:Category,
    meta:{
      title:'分类',
      icon:FolderOutlined,
      selectedIcon:FolderOpenFilled
    }
  },
  {
    path:'/app/todo',
    component:Todo,
    meta:{
      title:'ToDo',
      icon:EditOutlined,
      selectedIcon:EditFilled
    }
  },
  {
    path:'/app/admin',
    component:Admin,
    meta:{
      title:'管理',
      icon:ToolOutlined,
      selectedIcon:ToolFilled
    }
  },
]

export {
  tabbarRoutes
}
