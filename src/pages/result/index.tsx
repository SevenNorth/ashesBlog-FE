import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addHistorySearch } from '../../actions/discovery'
import { toggleLoading } from '../../actions/loading'
import SearchNavbar from '../../components/search-bar'
import Loading from '../../components/loading'
import List from '../../components/list'
import { IItem } from '../../constantTypes/listTypes'

const testData = (str:string):Array<IItem> => {
  const data :Array<IItem>=[]
  const template :IItem = {
    title: 'a',
    summary:'Time goes by so fast, people go in and out of your life. You must never miss the opportunity to tell these people how much they mean to you.',
    tags: ['js', 'html', 'css'],
    uniId:"sdfs"
  }
  const len = Math.floor(Math.random()*10+1)*Math.floor(Math.random()*10+1)

  for(let i=0;i<len;i++){
    const temp = {...template}
    temp.title = str + '-' + (i+1)
    temp.uniId = ''+ i
    data.push(temp)
  }

  return data;
}

const Result: React.FunctionComponent = (props:any) => {
  const [value, setValue] = useState(window.decodeURI(props.location.search.split('=')[1]))
  const [data, setData] = useState([] as Array<IItem>)

  const search=(value:string)=>{
    value = value.trim()
    if(!value) return;
    setValue(value)
    props.history.push('/result?search='+value)
    props.addHistory(value)
  }
  useEffect(() => {
    // 模拟发送请求
    props.toggleLoading(true)
    setTimeout(()=>{
      props.toggleLoading(false)
      const resData=testData(value)
      setData(resData)
    },500)
  // eslint-disable-next-line
  }, [props.location.search])
  return (
    <div className="wrap">
      <div className="navbar">
        <SearchNavbar search={(value:string)=>search(value)} value={value} setValue={(value:string)=>setValue(value)} goBack />
      </div>
      <div className="list-wraper">
        <List data={data} />
        {/* todo：上拉加载 */}
        {/* <div>点击加载更多</div> */}
      </div>
      <Loading />
    </div>
  )
}

export default connect(
  (state:any)=>({
    historySearch:state.discovery.historySearch
  }),
  dispatch=>({
    addHistory:(history:string)=>dispatch(addHistorySearch(history)),
    toggleLoading:(status:boolean)=>dispatch(toggleLoading(status)),
  })
)(Result)
