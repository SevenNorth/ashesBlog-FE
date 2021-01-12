import React from 'react'
import { withRouter } from 'react-router-dom'

function ListItem(props:any) {
  console.log(props);
  return (
    <div className='list-item'>
      <div className='list-item-header'>
        {props.title}
      </div>
      <div className='list-item-content'>
        {props.summary}
      </div>
      <div className='list-item-footer'>
        tags
      </div>
    </div>
  )
}

export default withRouter(ListItem);