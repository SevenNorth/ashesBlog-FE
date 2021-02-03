import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { ITabbarRoute } from '../../constantTypes/routeTypes';
import TabbarRoutes from '../../routes/tabbarRoutes';

const useStyles = makeStyles({
  selected: {
    color: "#4E5B61",
    fontSize:"0.14rem !important"
  },
  label: {
    fontSize:"0.12rem",
    transitionDelay:'0s',
    color: "#aaa"
  },
});

function Tabbar(props: any) {
  const classes = useStyles();
  const [value, setValue] = useState(props.location.pathname);

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
                icon={props.location.pathname === route.path 
                  ? 
                  <route.meta.selectedIcon style={{color:"#4E5B61",fontSize:"0.25rem"}} /> 
                  : 
                  <route.meta.icon style={{ fontSize:"0.24rem",color:"#aaa"}} 
                  />}
                key={route.path}
                value={route.path}
                classes={{label:classes.label,selected:classes.selected}}
                showLabel />
            )
          })
        }
      </BottomNavigation>
    </div>
  )
}

export default withRouter(Tabbar);