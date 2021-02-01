import React, { useState } from 'react'
import { DeleteForeverOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons'
import LabelBox from '../../components/label-box'
import SearchNavbar from '../../components/search-bar'

import './index.less'
import { connect } from 'react-redux'
import { toggleShowTags, addHistorySearch, delHistorySearch, clearHistorySearch} from '../../actions/discovery'

const Discovery: React.FunctionComponent = (props:any) => {
  const [tagSearch, setTagSearch] = useState(['test'])

  const search=(value:string)=>{
    value = value.trim()
    if(!value) value = tagSearch[0]; // value为空，设置搜索的默认值为热搜的第一个

    props.addHistory(value)
    // 模拟发送请求
    setTimeout(()=>{
      console.log(value)
    },1000)
  }

  return (
    <div className="wrap">
      <div className="navbar">
        <SearchNavbar search={(value:string)=>search(value)} />
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
                />
    </div>
  )
}

export default connect(
  (state:any)=>({
    showHot:state.discovery.showHot,
    historySearch:state.discovery.historySearch
  }),
  dispath=>({
    toggleShowTags:(showHot:boolean)=>dispath(toggleShowTags(showHot)),
    addHistory:(history:string)=>dispath(addHistorySearch(history)),
    delHistory:(id:number)=>dispath(delHistorySearch(id)),
    clearHistory:()=>dispath(clearHistorySearch())
  })
)(Discovery)