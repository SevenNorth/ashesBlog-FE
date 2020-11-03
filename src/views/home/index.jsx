import { List } from 'antd-mobile'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import CustomNavbar from '../../components/navbar'

import './index.css'

const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component {
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
              onClick={() => {
                this.props.history.push('/article')
              }}
              platform="android"
              thumb={
                <div 
                  style={{
                    background:"#FF5B05",
                    padding:5,
                    borderRadius:"50%",
                    width:50,
                    height:50,
                    display:"flex",
                    justifyContent:'center',
                    alignItems:'center',
                    fontSize:'28px'
                  }}
                >
                  {"JS"}
                </div>
              }
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

export default withRouter(Home)