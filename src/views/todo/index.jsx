import { PlusOutlined } from '@ant-design/icons'
import { NavBar, Drawer } from 'antd-mobile'
import React, { Component } from 'react'

import AddToDo from './addTodo'
// import Test from './test'
import TodoList from './todoList'

import './index.less'
export default class Todo extends Component {
  state={
    open:false,
    todos:Array(6).fill(null).map((todo,index)=>{
      return {
        id: index,
        title: '标题' + index,
        content: '阿巴阿巴',
        completed: Math.random() > 0.5 ? true : false
      }
    })
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
          // sidebar={<Test close={this.onOpenChange} />}
          sidebarStyle={{
            width:"100%",
            height:"60%"
          }}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
          enableDragHandle
          dragHandleStyle={{
            display:"none"
          }}
          position="bottom"
          contentStyle={{
            textAlign:'center',
            width:'100%',
            height:"100%"
          }}
        >
          <TodoList todos={this.state.todos} />
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
