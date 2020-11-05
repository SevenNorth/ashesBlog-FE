import { PlusOutlined } from '@ant-design/icons'
import { NavBar, Drawer } from 'antd-mobile'
import React, { Component } from 'react'
import moment from 'moment'

import AddToDo from './addTodo'
// import Test from './test'
import TodoList from './todoList'

import './index.less'
export default class Todo extends Component {
  state={
    open:false,
    todos:Array(6).fill(null).map((todo,index)=>{
      return {
        id: Math.random(),
        title: '标题' + index,
        content: '阿巴阿巴',
        completed: Math.random() > 0.5 ? true : false,
        createAt:moment().format('YYYY-MM-DD HH:mm:ss')
      }
    }),
    addNew:true,
    currentTodo:{},
    modifyID:0
  }

  addTodoHandler=(todo)=>{
    todo={
      ...todo,
      id:Math.random()
    }
    const temp=[...this.state.todos] // 得做深拷贝，直接引用地址无法实现修改
    temp.unshift(todo)
    // console.log(temp)
    this.setState({
      todos:temp
    })
  }

  removeTodoHandler=(id)=>{
    let temp=[...this.state.todos]
    temp=temp.filter(todo=>todo.id!==id)
    this.setState({
      todos:temp
    })
  }

  toggleTodoHandler=(id)=>{
    let temp=[...this.state.todos]
    temp=temp.map( todo => {
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({
      todos:temp
    })
  }

  modifyOpenHandler=(id)=>{
    this.setState({
      addNew:false
    })
    const temp=this.state.todos.filter(todo=>todo.id===id)
    this.setState({
      currentTodo:temp,
      modifyID:id
    })
    this.onOpenChange()
  }

  modifyTodoHandler=(content)=>{
    const mID=this.state.modifyID
    let temp=[...this.state.todos]
    temp=temp.map(todo=>{
      if(todo.id===mID){
        todo.title=content.title
        todo.content=content.content
      }
      return todo
    })
    this.setState({
      todos:temp
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
          sidebar={<AddToDo
            close={this.onOpenChange}
            add={this.addTodoHandler}
            addNew={this.state.addNew}
            currentTodo={this.state.currentTodo}
            modify={this.modifyTodoHandler}
            />}
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
          <TodoList
            todos={this.state.todos} 
            remove={this.removeTodoHandler}
            toggle={this.toggleTodoHandler}
            open={this.onOpenChange}
            modifyOpen={this.modifyOpenHandler}
          />
        </Drawer>
        <div className="addNew"
          onClick={()=>{
            this.onOpenChange()
            this.setState({
              addNew:true
            })
          }}
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
