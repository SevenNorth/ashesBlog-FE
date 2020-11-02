import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default function CustomNavbar({hasBack,title}) {
  return (
    <div>
      <NavBar
        mode="light"
        icon={hasBack ? <Icon type="left" /> : null}
        onLeftClick={() => console.log('onLeftClick')}
      >{title}</NavBar>
    </div>
  )
}
