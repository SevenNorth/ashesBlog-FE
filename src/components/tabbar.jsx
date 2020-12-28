import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import HomeIcon from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';

import { tabbarRoutes } from '../routes'
import { withRouter } from 'react-router-dom';


function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      {
        tabbarRoutes.map(route => (<BottomNavigationAction label={route.meta.title} icon={<HomeIcon />} />))
      }
    </BottomNavigation>
  );
}

export default withRouter(SimpleBottomNavigation);