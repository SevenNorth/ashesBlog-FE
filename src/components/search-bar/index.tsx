import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
// eslint-disable-next-line
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { ArrowBackIos, HighlightOff, Telegram } from '@material-ui/icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ISearchBar extends RouteComponentProps {
  search:Function,
  value:string,
  setValue:Function,
  goBack?:boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      flex: 1,
      fontSize:'0.14rem',
      height:'100%',
      backgroundColor:'#fff',
      paddingLeft: "5px",
      marginLeft:"0"
    },
    iconButton: {
      padding: 5,
      fontSize:'0.14rem',
      borderRadius:'0'
    },
    divider: {
      color:'#ddd',
    },
    root:{
      height:'100%',
      display:'flex',
      alignItems:'center'
    }
  }),
);

function SearchNavbar(props:ISearchBar) {
  const classes = useStyles();

  const searchHandle=()=>{
    props.search(props.value)
  }

  return (
      <div className="navbar-inner">
        {
          props.goBack
          ?
          <IconButton classes={{root:classes.root}} 
            className={classes.iconButton}
            style={{padding:"5px 2px 5px 5px"}}
            onClick={()=>props.history.push('app/discovery')} >
              <ArrowBackIos style={{fontSize:'0.16rem',color: '#bbb'}} />
          </IconButton>
          :
          null
        }
        <InputBase
          classes={{root:classes.root}}
          className={classes.input}
          placeholder="Search For Something Interesting"
          inputProps={{ 'aria-label': 'Search For Something Interesting' }}
          onChange={(e=>props.setValue(e.target.value))}
          value={props.value}
        />
        {
          props.value!==''
          ?
          <IconButton classes={{root:classes.root}} 
            className={classes.iconButton}
            style={{backgroundColor:"#fff"}}
            aria-label="search" 
            onClick={()=>props.setValue('')} >
              <HighlightOff style={{fontSize:'0.16rem',color: '#bbb'}} />
          </IconButton>
          :
          null
        }
        {/* <Divider className={classes.divider} orientation="vertical" /> */}
        <IconButton 
          classes={{root:classes.root}}
          className={classes.iconButton}
          onClick={searchHandle}
          aria-label="search">
            <Telegram style={{fontSize:'0.16rem',color: '#bbb'}} />
        </IconButton>
      </div>
  );
}

export default withRouter(SearchNavbar)