// eslint-disable-next-line
import { CreateOutlined, Favorite, FavoriteBorder, KeyboardBackspace, ShareOutlined, ThumbUpAlt, ThumbUpAltOutlined } from '@material-ui/icons'
// eslint-disable-next-line
import React, { useState } from 'react'
import './index.less'


const Article:React.FunctionComponent =(props:any) => {
  console.log("🚀-fjf : props", props)
  return (
    <div className="wrap">
      <div className="navbar">
        <div className="navbar-inner article-navbar">
          <KeyboardBackspace style={{fontSize:'0.18rem',color: '#a18f8f'}} onClick={()=>props.history.goBack()} />
          <div className="article-title">{props.location.state}</div>
        </div>
      </div>
      <div className="article-wraper">
        <article className="article-content">
          <div>
            
          </div>
        </article>
      </div>
    </div>
  )
}
export default Article