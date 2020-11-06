import React, { Component } from 'react'
// import { Remarkable } from 'remarkable';
// import Markdown from 'markdown-to-jsx';
import { NavBar } from 'antd-mobile';
import { LeftCircleOutlined } from '@ant-design/icons';
import hljs  from 'highlight.js'
import 'highlight.js/styles/github.css';
import test from '../../static/1) Generator函数的语法.md'
import './index.less'

const myMarked = require('marked')

myMarked.setOptions({
  renderer: new myMarked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
}); 

export default class Article extends Component {
  state={
    markdown:''
  }
  
  // md = new Remarkable();
  componentWillMount() {
    fetch(test)
      .then(res => res.text())
      .then(text => {
        // console.log(text)
        this.setState({ markdown: text })
      });
  }


  render() {
    return (
      // <div 
      //   dangerouslySetInnerHTML={{__html: this.md.render(this.state.markdown)}}
      //   style={{
      //     padding:10
      //   }}
      // ></div>
      // -------------------
      // <Markdown
      //   style={{
      //     padding:10
      //   }}
      // >
      //   {this.state.markdown}
      // </Markdown>

      <div className="article">
        <NavBar className="article-nav" mode="light" leftContent={<LeftCircleOutlined style={{color:'gray'}} />} >Generator函数的语法</NavBar>
        <div 
          dangerouslySetInnerHTML={{__html: myMarked(this.state.markdown)}}
          className="article-content"
        >
        </div>
      </div>
    )
  }
}
