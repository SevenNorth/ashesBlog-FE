import React from 'react'
import { IItem, IList } from '../../constantTypes/listTypes'
import ListItem from './Item'

import './index.less'

export default function List(props:{data:IList}) {
  return (
    <div className="list">
      {
        props.data.map((item:IItem,index:number) => <ListItem {...item} key={index} />)
      }
    </div>
  )
}
