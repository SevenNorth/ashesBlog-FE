import React from 'react'
import { SvgIconComponent } from '@material-ui/icons'
import { Chip, makeStyles } from '@material-ui/core'

import './index.less'
interface ILabelBox {
  title:string,
  btnIcon:SvgIconComponent,
  data:Array<string|null>,
  showData:boolean,
  btnClick?:Function,
  labelClick?:Function
}

const useStyles = makeStyles({
  label: {
    fontSize:"0.14rem",
  },
  root:{
    height:"0.2rem",
    marginRight:"10px",
    marginBottom:"5px",
    backgroundColor:"#f0f0f0"
  }
});

function LabelBox(props:ILabelBox) {
  const classes = useStyles()

  return (
    props.data.length > 0
    ?
    <div className="label-box">
      <div className="box-header">
        <div className="box-header-name">
          {props.title}
        </div>
        <div className="box-header-btn">
          <props.btnIcon style={{fontSize:"0.18rem",color:"#AAA"}} onClick={()=>props.btnClick?.()} />
        </div>
      </div>
      <div className="box-content">
        {
          props.showData
          ?
          props.data.map((label:string|null) => {
            return  <Chip label={label} 
                          classes={{label:classes.label, root:classes.root}}
                          key={label}/>
          })
          :
          <div className="hidden">当前热门搜索已隐藏</div>
        }
      </div>
    </div>
    :
    null
  )
}

export default LabelBox
