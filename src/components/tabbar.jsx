import React from 'react'
import { withRouter } from 'react-router-dom';
import { 
  QuestionCircleOutlined,
  EditOutlined,
  UserOutlined,
  UnorderedListOutlined
  } from '@ant-design/icons'

import { TabBar } from 'antd-mobile';
import './tabbar.css'

class CustomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
    };
  }


  render() {
    console.log(this.props)
    return (
      <div className="tabbar-box">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            icon={<QuestionCircleOutlined />}
            title="首页"
            selected={this.state.selectedTab==='homeTab'}
          ></TabBar.Item>
          <TabBar.Item
            icon={<UnorderedListOutlined />}
            title="分类"
          ></TabBar.Item>
          <TabBar.Item
            icon={<EditOutlined />}
            title="发布"
          ></TabBar.Item>
          <TabBar.Item
            icon={<UserOutlined />}
            title="管理"
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default withRouter(CustomTabBar)