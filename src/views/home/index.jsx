import { List } from 'antd-mobile'
import React, { Component } from 'react'
import CustomNavbar from '../../components/navbar'

import './index.css'

const Item = List.Item;
const Brief = Item.Brief;
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <CustomNavbar hasBack={false} title={ "首页" } />
        </header>
        <main>
          <List>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"JS"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"CS"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"HT"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"JQ"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Vu"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
            <Item
              multipleLine={true}
              onClick={() => {}}
              platform="android"
              thumb={<div style={{background:"#FF5B05",padding:5,borderRadius:"50%"}}>{"Re"}</div>}
            >
              文章标题
              <Brief>阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴</Brief>
            </Item>
          </List>
        </main>
      </div>
    )
  }
}
