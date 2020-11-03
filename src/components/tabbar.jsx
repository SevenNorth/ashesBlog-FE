import React from 'react'
import { withRouter } from 'react-router-dom';

import { TabBar } from 'antd-mobile';
import { tabbarRoutes } from '../routes'

import './tabbar.css'

class CustomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '/app/home',
      hidden: false,
    };
  }

  componentDidMount(){
    this.setState({
      selectedTab: this.props.location.pathname
    })
  }

  render() {
    return (
      <div className="tabbar-box">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          {
            tabbarRoutes.map(route=>(
              <TabBar.Item
                icon={<route.meta.icon />}
                title={route.meta.title}
                selected={this.state.selectedTab===route.path}
                selectedIcon={
                  <route.meta.selectedIcon />
                }
                onPress={() => {
                  this.setState({
                    selectedTab: route.path,
                  });
                  this.props.history.push(route.path)
                }}
                key={route.path}
              ></TabBar.Item>
            ))
          }
        </TabBar>
      </div>
    );
  }
}
export default withRouter(CustomTabBar)