import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, FavoriteBorder, KeyboardBackspace, ThumbUpAlt, ThumbUpAltOutlined } from '@material-ui/icons'
// eslint-disable-next-line
import React, { useState } from 'react'
import './index.less'

const testTxt:string = `<h2>测试文本</h2>测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本
测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本`

const useStylesIcon = makeStyles({
  root:{
    fontSize:"0.3rem"
  },
  secondary:{
    color:"#ff23ac"
  },
  primary:{
    color:"#12acbe"
  }
});

const useStylesButton = makeStyles({
  root:{
    padding:"10px"
  }
})

const Article:React.FunctionComponent =(props:any) => {
  const classesIcon=useStylesIcon()
  const classesButton=useStylesButton()
  return (
    <div className="wrap">
      <div className="navbar">
        <div className="navbar-inner article-navbar">
          <KeyboardBackspace style={{fontSize:'0.18rem',color: '#333'}} onClick={()=>props.history.goBack()} />
          <div className="article-title">{props.location.state}</div>
        </div>
      </div>
      <div className="article-wraper">
        <article className="article-content">
          <div dangerouslySetInnerHTML={{__html:testTxt}}></div>
        </article>
        <div className="article-footer">
          <IconButton classes={{root:classesButton.root}} >
            {/* 已点赞或收藏为实心，反之为空心 */}
            { 0 ? <ThumbUpAlt classes={{root:classesIcon.root,colorSecondary:classesIcon.secondary}} color="secondary" /> : <ThumbUpAltOutlined classes={{root:classesIcon.root}} />}
          </IconButton>
          <IconButton >
            { 1 ? <Favorite classes={{root:classesIcon.root,colorPrimary:classesIcon.primary}} color="primary" /> : <FavoriteBorder classes={{root:classesIcon.root}} />}
          </IconButton>
        </div>
      </div>
    </div>
  )
}
export default Article