import React from 'react'
import { SvgIconComponent } from '@material-ui/icons'

interface ILabelBox {
  title:string,
  btnIcon:SvgIconComponent,
  data:Array<string|null>,
  btnClick?:Function,
  labelClick?:Function
}

function LabelBox(props:ILabelBox) {
  return (
    props.data.length>0
    ?
    <div>
      <div className="box-header">
        <div className="box-header-name">
          {props.title}
        </div>
        <div className="box-header-btn">
          <props.btnIcon style={{fontSize:"0.16rem"}} onClick={()=>props.btnClick?.()} />
        </div>
      </div>
      <div className="box-content">
        ceshi
      </div>
    </div>
    :
    null
  )
}

export default LabelBox
