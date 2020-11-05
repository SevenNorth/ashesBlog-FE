// eslint-disable-next-line
import React, { useEffect } from 'react'
import { Button, NavBar, TextareaItem,  InputItem } from 'antd-mobile';
import { CloseOutlined } from '@ant-design/icons';
import { createForm } from 'rc-form'
import moment from 'moment'

function AddTodo(props) {
  const submit=()=>{
    if(props.addNew){
      let content=props.form.getFieldsValue()
      content={
        ...content,
        createAt:moment().format('YYYY-MM-DD HH:mm:ss'),
        completed:false,
      }
      // console.log(content)
      props.add(content)
    }else{
      let content=props.form.getFieldsValue()
      props.modify(content)
    }
    props.form.setFieldsValue({'title':'','content':''})
    props.close()
  }

  const closeHandler=()=>{
    props.close()
  }


  useEffect(() => {
    const currentTodo = props.currentTodo[0]
    if(currentTodo){
      props.form.setFieldsValue({'title':currentTodo.title,'content':currentTodo.content})
    }
    // eslint-disable-next-line
  }, [props.currentTodo])

  useEffect(() => {
    if(props.addNew){
      props.form.setFieldsValue({'title':'','content':''})
    }
    // eslint-disable-next-line
  }, [props.addNew])

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
          onClick={closeHandler}
        > {props.addNew ? '新建' : '修改'} </NavBar>
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