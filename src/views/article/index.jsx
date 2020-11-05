import React, { Component } from 'react'
import { Remarkable } from 'remarkable';

import test from '../../static/1) Generator函数的语法.md'

export default class Article extends Component {
  state={
    markdown:''
  }
  
  md = new Remarkable();
  componentWillMount() {
    fetch(test)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }


  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.md.render(this.state.markdown)}}></div>
    )
  }
}
