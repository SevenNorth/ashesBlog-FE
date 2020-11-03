import React, { Component } from 'react'
import {NavBar,Drawer,Icon,Accordion, List} from 'antd-mobile'

import SearchTree from './tree'
import './index.less'
export default class Category extends Component {
  state={
    open:false,
    showNav:true
  }
  onOpenChange=(...args)=>{
    console.log(args)
    this.setState({open:!this.state.open})
  }
  onChange = (key) => {
    console.log(key);
  }
  render() {
    // const sidebar=(
    //   <div style={{ marginTop: 10, marginBottom: 10 }}>
    //     <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
    //       <Accordion.Panel header="Title 1">
    //         <List className="my-list">
    //           <List.Item>content 1</List.Item>
    //           <List.Item>content 2</List.Item>
    //           <List.Item>content 3</List.Item>
    //         </List>
    //       </Accordion.Panel>
    //       <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
    //       <Accordion.Panel header="Title 3" className="pad">
    //         text text text text text text text text text text text text text text text
    //       </Accordion.Panel>
    //     </Accordion>
    //   </div>
    // )

    return (
      <div className="catrgory-box">
        {
          this.state.showNav
          ?
          <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
          :
          null
        }
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
