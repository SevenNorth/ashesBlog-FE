import { PlusOutlined } from '@ant-design/icons'
import { NavBar, Drawer } from 'antd-mobile'
import React, { Component } from 'react'

import AddToDo from './addTodo'
import TodoList from './todoList'

import './index.less'
export default class Todo extends Component {
  state={
    open:false
  }

  onOpenChange=(...args)=>{
    // console.log(args)
    this.setState({open:!this.state.open})
  }

  render() {
    return (
      <div className="todo-box">
        <NavBar>他山之石</NavBar>
        <Drawer
          className="my-drawer"
          style={{
            position: "relative" ,
            flex: 1,
          }}
          sidebar={<AddToDo close={this.onOpenChange} />}
          sidebarStyle={{
            width:"100%",
            height:"60%"
          }}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
          enableDragHandle
          dragHandleStyle={{
            width:20,
            height:40,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
            top:"50%",
            transform:"translate-y(50%)",
            display:"none"
          }}
          position="top"
          contentStyle={{
            textAlign:'center',
          }}
        >
          <TodoList />
        </Drawer>
        <div className="addNew"
          onClick={this.onOpenChange}
        >
          <PlusOutlined 
            style={{
              fontSize:50,
              color:"#FAFAFA",
            }} 
          />
        </div>
      </div>
    )
  }
}
