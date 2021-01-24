import React from 'react'
import { withRouter } from 'react-router-dom'

import { Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  label: {
    fontSize:"0.12rem",
  },
  root:{
    height:"0.16rem",
    marginRight:"2px"
  }
});

function ListItem(props: any) {
  const classes = useStyles();

  const getColor=(tag:string)=>{
    let bgColor="#00f"
    switch (tag) {
      case "js":
        bgColor="#f6cb5b"
        break;
      case "css":
        bgColor="#fb5bcb"
        break;
      case "html":
        bgColor="#f65b5b"
        break;
      default:
        bgColor="#ccc"
        break;
    }
    return {backgroundColor:bgColor}
  }

  return (
    <div className='list-item'>
      <div className='list-item-header'>
        {props.title}
      </div>
      <div className='list-item-content'>
        {props.summary}
      </div>
      <div className='list-item-footer'>
        {
          props.tags.map((tag:any)=>{
            return <Chip label={tag} 
                          classes={{label:classes.label, root:classes.root}} 
                          style={getColor(tag)}/>
        })
        }
      </div>
    </div>
  )
}

export default withRouter(ListItem);