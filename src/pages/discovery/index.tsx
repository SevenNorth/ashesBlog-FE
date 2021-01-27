import React, { useState } from 'react'
import { DeleteForeverOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons'
import LabelBox from '../../components/label-box'
import SearchNavbar from '../../components/search-bar'

import './index.less'

const Discovery: React.FunctionComponent = () => {

  const [historySearch, setHistorySearch] = useState([])
  const [hotSearch, sethotSearch] = useState(['test'])
  const [showHot, setShowHot] = useState(true)

  const search=(value:string)=>{
    value = value.trim()
    if(!value) value = hotSearch[0]; // value为空，设置搜索的默认值为热搜的第一个

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
                data={historySearch}
                btnClick={()=>setShowHot(!showHot)}
                labelClick={(value:string)=>search(value)}
                />
      <LabelBox title="热门搜索"
                btnIcon={showHot ? VisibilityOutlined : VisibilityOffOutlined}
                data={hotSearch}
                btnClick={()=>setShowHot(!showHot)}
                />
    </div>
  )
}

export default  Discovery