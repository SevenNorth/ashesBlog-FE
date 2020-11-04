import React, { Component } from 'react'
import {NavBar,Drawer } from 'antd-mobile'
import { MenuUnfoldOutlined,MenuFoldOutlined } from '@ant-design/icons'

import SearchTree from './tree'
import './index.less'
export default class Category extends Component {
  state={
    open:false,
  }
  onOpenChange=(...args)=>{
    console.log(args)
    this.setState({open:!this.state.open})
  }
  onChange = (key) => {
    console.log(key);
  }
  render() {

    return (
      <div className="catrgory-box">
        <NavBar icon={this.state.open?<MenuFoldOutlined />:<MenuUnfoldOutlined />} onLeftClick={this.onOpenChange}>Basic</NavBar>
        <Drawer
          className="my-drawer"
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
          style={{
            position: "relative" ,
            flex: 1,
          }}
          sidebar={<SearchTree/>}
          sidebarStyle={{
            width:"80%"
          }}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
          dragHandleStyle={{
            width:20,
            height:40,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
            top:"50%",
            transform:"translate-y(50%)"
          }}
        >
          阿巴阿巴
        </Drawer>
      
      </div>
    )
  }
}
