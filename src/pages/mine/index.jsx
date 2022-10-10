import React from 'react'
import { List, NavBar, Avatar, Space } from 'antd-mobile'
import './index.less'
export default function Mine(props) {
  return (
    <div className="wrapper mine">
      <div className="navbar-wrapper">
        <NavBar
          style={{
            '--height': '36px',
            '--border-bottom': '1px #eee solid',
          }}
          back={null}
        >
          个人中心
        </NavBar>
      </div>
      <div className="list-wraper">
        <List>
          <List.Item
              title='张三'
              prefix={
                <Avatar 
                  src= 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                  style={{ '--size': '48px' }} />
              }
              description={'138****8888'}
              onClick={()=>props.history.push('/')}
            >
            </List.Item>
        </List>
        <Space />
        <List>
          <List.Item
            title='我要发布'
            onClick={()=>props.history.push('/')}
          >
          </List.Item>
        </List>
      </div>
    </div>
  )
}
