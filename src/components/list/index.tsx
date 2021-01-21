import React from 'react'
import { IItem, IList } from '../../constantTypes/listTypes'
import ListItem from './Item'

export default function List(props:IList) {
  return (
    <>
      {
        props.data.map((item:IItem) => <ListItem {...item} />)
      }
    </>
  )
}
