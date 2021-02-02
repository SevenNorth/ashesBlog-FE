import React, { useState } from 'react'
import { DeleteForeverOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons'
import LabelBox from '../../components/label-box'
import SearchNavbar from '../../components/search-bar'
import Loading from '../../components/loading'


import './index.less'
import { connect } from 'react-redux'
import { toggleShowTags, addHistorySearch, delHistorySearch, clearHistorySearch} from '../../actions/discovery'
import { toggleLoading } from '../../actions/loading'

const Discovery: React.FunctionComponent = (props:any) => {
  // eslint-disable-next-line
  const [tagSearch, setTagSearch] = useState(['js','html','css','vue','react'])
  const [value, setValue] = useState('')

  const search=(value:string)=>{
    value = value.trim()
    if(!value) value = tagSearch[0]; // value为空，设置搜索的默认值为标签的第一个
    setValue(value)
    props.addHistory(value)
    // 模拟发送请求
    props.toggleLoading(true)
    setTimeout(()=>{
      props.toggleLoading(false)
      console.log(value)
    },500)
  }

  return (
    <div className="wrap">
      <div className="navbar">
        <SearchNavbar search={(value:string)=>search(value)} value={value} setValue={(value:string)=>setValue(value)}/>
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
      <Loading />
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
    toggleLoading:(status:boolean)=>dispatch(toggleLoading(status)),
  })
)(Discovery)