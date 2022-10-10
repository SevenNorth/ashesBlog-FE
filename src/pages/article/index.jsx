// eslint-disable-next-line
import React, { useState } from 'react'
import './index.less'
import { NavBar, Image } from 'antd-mobile'
import _ from 'lodash'

const Article:React.FunctionComponent =(props:any) => {
  const {title} = props.location.state;
  return (
    <div className="wrap">
      <div className="navbar">
        <NavBar 
          style={{
            '--border-bottom': '1px #eee solid',
          }}
          onBack={()=>props.history.goBack()}
        >
          {title}
        </NavBar>
      </div>
      <div className="article-wraper">
        <article className="article-content">
          <h4>债权人</h4>
          <p>张三</p>
          <h4>债务人</h4>
          <p>李四</p>
          <h4>证明材料</h4>
          {
            _.map(Array(_.random(0, 10)), (item, index)=>{
              return <Image
                lazy
                src='https://tuapi.eees.cc/api.php?category=dongman&px=m&type=302'
              />
            })
          }
        </article>
      </div>
    </div>
  )
}
export default Article