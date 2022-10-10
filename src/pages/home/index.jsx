import React, { useState, useEffect } from 'react'
import './index.less'
import { List } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
const rowCount = 100

const types = ['债权','债务','出售','置换','抵押'];

const data = _.map(Array(rowCount), (_item, index) => {
  const type = _.sample(types);
  const uniqId = _.uniqueId(`${type}_`);
  return {
    uniqId,
    title: `${type}_Title`,
    content: `该${type}信息内容`,
    summary: `该${type}信息摘要`,
  }
})


const Home: React.FunctionComponent = (props:any) => {
  return (
      <List
        mode='card'
      >
        {data.map((item) => (
          <List.Item
            key={item.uniqId}
            arrow={false}
            title={item.title}
            onClick={()=>props.history.push('/article/'+item.uniId, {title: props.title})}
          >
            {item.summary}
          </List.Item>
        ))}
      </List>
  )
}
export default withRouter(Home)
