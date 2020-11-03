import React from 'react'
import { Button, NavBar, TextareaItem,  InputItem, WingBlank } from 'antd-mobile';
import { CloseOutlined } from '@ant-design/icons';

export default function AddTodo(props) {
  return (
    <div
      style={{
        height:"100%",
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
      }}
    >
      <div>
        <NavBar
          rightContent={<CloseOutlined />}
          mode="light"
          onClick={props.close}
        />
        <InputItem
          clear
          placeholder="请输入标题"
        >标题</InputItem>
        <TextareaItem
          clear
          title="内容"
          placeholder="请输入内容"
          rows={7}
        />
      </div>
      <WingBlank>
        <Button type="primary">
          确定
        </Button>
      </WingBlank>
    </div>
  )
}
