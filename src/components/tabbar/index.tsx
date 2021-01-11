import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { ITabbarRoute } from '../../constantTypes/routeTypes';
import TabbarRoutes from '../../routes/tabbarRoutes';

const useStyles = makeStyles({
  selected: {
    color: "#cc1111",
  },
});

function Tabbar(props: any) {
  const classes = useStyles();
  const [value, setValue] = useState("/app/home");

  const changeTab = (e: any, path: string) => {
    setValue(path);
  }

  useEffect(() => {
    props.history.push(value);
    // eslint-disable-next-line
  }, [value])

  return (
    <div>
      <BottomNavigation value={value} onChange={changeTab} >
        {
          TabbarRoutes.map((route: ITabbarRoute) => {
            return (
              <BottomNavigationAction
                label={route.meta.title}
                icon={props.location.pathname === route.path ? <route.meta.selectedIcon style={{color:"#cc1111"}} /> : <route.meta.icon  />}
                key={route.path}
                value={route.path}
                classes={{selected:classes.selected}}
                showLabel />
            )
          })
        }
      </BottomNavigation>
    </div>
  )
}

export default withRouter(Tabbar);