import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { HighlightOff } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      fontSize:'0.14rem',
      height:'100%',
    },
    iconButton: {
      padding: 10,
      fontSize:'0.14rem',
    },
    divider: {
      color:'#ddd'
    },
    root:{
      height:'100%'
    }
  }),
);

export default function SearchNavbar(props:{search:Function}) {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState('')

  const searchHandle=()=>{
    props.search(searchValue)
  }

  return (
      <div className="navbar-inner">
        <InputBase
          classes={{root:classes.root}}
          className={classes.input}
          placeholder="Search For Something Interesting"
          inputProps={{ 'aria-label': 'Search For Something Interesting' }}
          onChange={(e=>setSearchValue(e.target.value))}
          value={searchValue}
        />
        {
          searchValue!==''
          ?
          <IconButton classes={{root:classes.root}} 
            className={classes.iconButton} 
            aria-label="search" 
            onClick={()=>setSearchValue('')} >
              <HighlightOff style={{fontSize:'0.16rem',color: '#bbb'}} />
          </IconButton>
          :
          null
        }
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton 
          classes={{root:classes.root}}
          className={classes.iconButton}
          onClick={searchHandle}
          aria-label="search">
            搜索
        </IconButton>
      </div>
  );
}