import React,{useEffect, useState} from 'react'
import { Tabs, WhiteSpace, Badge, Card, Modal } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { CheckCircleTwoTone, DeleteTwoTone, PushpinTwoTone } from '@ant-design/icons';

import './todoList.less'

export default function TodoList(props) {

  const [all, setAll] = useState(<div></div>)
  const [todo, setTodo] = useState(<div></div>)
  const [done, setDone] = useState(<div></div>)

  const tabs = [
    { title: <Badge>全部</Badge>},
    { title: <Badge>未完成</Badge>},
    { title: <Badge>已完成</Badge>}
  ];

  const renderTabBar=(props)=> {
    return (<Sticky >
      {({ style }) => <div style={{ ...style, zIndex: 1}}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }

  const alert = Modal.alert;

  useEffect(()=>{
    const allList=props.todos
    const todoList=props.todos.filter(todo=>!todo.completed)
    const doneList=props.todos.filter(todo=>todo.completed)
    setAll(tabContent(allList))
    setTodo(tabContent(todoList))
    setDone(tabContent(doneList))
    // eslint-disable-next-line
  },[props.todos])

  const tabContent=(current)=>{
    return (
      <div 
        style={{
          width:"100%"
        }}
        className="test4"
      >
        {
          current.map(todo=>{
            return (
              <div key={todo.id}>
                <Card >
                  <Card.Header
                    title={todo.title}
                    extra={ todo.completed ? <CheckCircleTwoTone onClick={()=>props.toggle(todo.id)} /> : <PushpinTwoTone twoToneColor='#f00' onClick={()=>props.toggle(todo.id)} />}
                  />
                  <Card.Body
                    onClick={()=>{
                      props.modifyOpen(todo.id)
                    }}
                  >
                    <div
                      style={{
                        width:"100%",
                        textAlign:"left",
                        textIndent:"2em"
                      }}
                    >{todo.content}</div>
                  </Card.Body>
                  <Card.Footer 
                    content={<div style={{textAlign:'left'}}>{todo.createAt}</div>} 
                    extra={<DeleteTwoTone onClick={()=>{
                      alert('删除', '真的要删除吗???', [
                        { text: '取消', onPress: () => {} },
                        { text: '确定', onPress: () => props.remove(todo.id) },
                      ])
                    }} />}
                  />
                </Card>
              <WhiteSpace size="lg" />
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div
      style={{
        height:"100%"
      }}
      className="test1"
    >
      <StickyContainer className="test2" style={{
        height:"100%"
      }}>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { 
            // console.log('onChange', index, tab); 
          }}
          onTabClick={(tab, index) => { 
            // console.log('onTabClick', index, tab); 
          }}
          renderTabBar={renderTabBar}
          swipeable={true}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            height: '100%', 
            backgroundColor: '#fff' 
          }}
            className="test3"
          >
            {all}
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            height: '100%', 
            backgroundColor: '#fff' 
          }}
            className="test3"
          >
            {todo}
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'center', 
            height: '100%', 
            backgroundColor: '#fff' 
          }}
            className="test3"
          >
            {done}
          </div>
        </Tabs>
      </StickyContainer>
    </div>
  )
}
