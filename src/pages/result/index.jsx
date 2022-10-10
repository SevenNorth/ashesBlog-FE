import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addHistorySearch } from '../../actions/discovery'
import { toggleLoading } from '../../actions/loading'
import Loading from '../../components/loading'
import { NavBar, List } from 'antd-mobile'
import './index.less';
import _ from 'lodash';


const genData = (str:string):Array<any> => {
  const len = _.random(0, 100)
  const data = _.map(Array(len), (_item, index) => {
    const type = _.sample(len);
    const uniqId = _.uniqueId(`${type}_`);
    return {
      uniqId,
      title: `${str}_Title`,
      content: `该${str}信息内容`,
      summary: `该${str}信息摘要`,
    }
  })

  return data;
}

const Result: React.FunctionComponent = (props:any) => {
  const [value, setValue] = useState(window.decodeURI(props.location.search.split('=')[1]))
  const [data, setData] = useState()
  useEffect(() => {
    // 模拟发送请求
    props.toggleLoading(true)
    setTimeout(()=>{
      props.toggleLoading(false)
      const resData=genData(value)
      setData(resData)
    },500)
  // eslint-disable-next-line
  }, [props.location.search])
  return (
    <div className="wrapper result">
      <div className="navbar">
        <NavBar 
            style={{
              '--height': '36px',
              '--border-bottom': '1px #eee solid',
            }}
            onBack={()=>props.history.goBack()}
          >
            {value}
        </NavBar>
      </div>
      <div className="list-wraper">
        <List
          mode='card'
        >
          {
            _.map(data, item => {
              return <List.Item
              key={item.uniqId}
              arrow={false}
              title={item.title}
              onClick={()=>props.history.push('/article/'+item.uniId, {title: item.title})}
            >
              {item.summary}
            </List.Item>
            })
          }
        </List>
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
