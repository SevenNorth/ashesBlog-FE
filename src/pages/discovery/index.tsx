import React, { useState } from 'react'
import { DeleteForeverOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons'
import LabelBox from '../../components/label-box'


import './index.less'
import { connect } from 'react-redux'
import { toggleShowTags, addHistorySearch, delHistorySearch, clearHistorySearch} from '../../actions/discovery'

const Discovery: React.FunctionComponent = (props:any) => {
  // eslint-disable-next-line
  const [tagSearch, setTagSearch] = useState(['债权','债务','出售','置换','抵押'])
  const [value, setValue] = useState('')

  const search=(value:string)=>{
    value = value.trim()
    if(!value) value = tagSearch[0]; // value为空，设置搜索的默认值为标签的第一个
    setValue(value)
    props.addHistory(value)
    props.history.push('/result?search='+value)
  }

  return (
    <div className="wrapper">
      <div className="navbar">
      </div>
      <LabelBox title="历史搜索"
                btnIcon={DeleteForeverOutlined}
                data={props.historySearch}
                showData={true}
                btnClick={()=>props.clearHistory()}
                labelClick={(value:string)=>search(value)}
                />
      <LabelBox title="标签搜索"
                btnIcon={props.showHot ? VisibilityOutlined : VisibilityOffOutlined}
                data={tagSearch}
                showData={props.showHot}
                btnClick={()=>props.toggleShowTags(!props.showHot)}
                labelClick={(value:string)=>search(value)}
                />
    </div>
  )
}

export default connect(
  (state:any)=>({
    showHot:state.discovery.showHot,
    historySearch:state.discovery.historySearch
  }),
  dispatch=>({
    toggleShowTags:(showHot:boolean)=>dispatch(toggleShowTags(showHot)),
    addHistory:(history:string)=>dispatch(addHistorySearch(history)),
    delHistory:(id:number)=>dispatch(delHistorySearch(id)),
    clearHistory:()=>dispatch(clearHistorySearch()),
  })
)(Discovery)