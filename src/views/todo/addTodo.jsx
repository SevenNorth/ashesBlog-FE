import React from 'react'
import { Button, NavBar, TextareaItem,  InputItem } from 'antd-mobile';
import { CloseOutlined } from '@ant-design/icons';
import {createForm} from 'rc-form'

function AddTodo(props) {
  const submit=()=>{
    const content=props.form.getFieldsValue()
    console.log(content)
    props.form.setFieldsValue({'title':'','content':''})
    props.close()
  }
  const { getFieldProps } = props.form;
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
        > 新建 </NavBar>
        <InputItem
          clear
          placeholder="请输入标题"
          {...getFieldProps('title')}
        >标题</InputItem>
        <TextareaItem
          clear
          title="内容"
          placeholder="请输入内容"
          rows={7}
          {...getFieldProps('content')}
        />
      </div>
      <Button type="primary" onClick={submit}>
        确定
      </Button>
    </div>
  )
}

export default createForm()(AddTodo)