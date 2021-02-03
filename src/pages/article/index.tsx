import React from 'react'

export default function Article(props:any) {
  return (
    <div className="wrap">
      文章
      <br/>
      {props.location.state}
    </div>
  )
}
