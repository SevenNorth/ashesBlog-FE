import React, { useState, useEffect } from 'react'
import List from '../../components/list'
import Loading from '../../components/loading'
import { IItem } from '../../constantTypes/listTypes'

import { connect } from 'react-redux'
import { toggleLoading } from '../../actions/loading'
import { toggleFlag } from '../../actions/flag'

import './index.less'

const testData :Array<IItem> = [
  {
    title: 'a',
    summary:'Time goes by so fast, people go in and out of your life. You must never miss the opportunity to tell these people how much they mean to you.',
    tags: ['js', 'html', 'css']
  },
  {
    title: 'a',
    summary: '一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本一些文本',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  }
]

const testData2 :Array<IItem> = [
  {
    title: 'a2',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a2',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  },
  {
    title: 'a2',
    summary: 'abc',
    tags: ['q', 'w', 'e']
  }
]

const Home: React.FunctionComponent = (props:any) => {
  const [data, setData] = useState([] as Array<IItem>);
  useEffect(() => {
    props.toggleLoading(true);
    setTimeout(() => {
      props.toggleLoading(false);
      // 模拟切换数据
      if (props.flag === 'newest') {
        setData(testData);
      } else {
        setData(testData2);
      }
    }, 1000)
  // eslint-disable-next-line
  }, [props.flag])

  return (
    <div className="wrap">
      <div className="navbar">
        <div className="navbar-inner">
          <div className={ props.flag==="newest" ? "flag-btn flag-btn-on":"flag-btn"} onClick={() => props.toggleFlag('newest')}>最新</div>
          <div className={ props.flag==="hotest" ? "flag-btn flag-btn-on":"flag-btn"} onClick={() => props.toggleFlag('hotest')}>热门</div>
        </div>
      </div>
      <div className="list-wraper">
        {/* todo: 下拉刷新 */}
        {/* <div>释放更新</div> */}
        <List data={data} />
        {/* todo：上拉加载 */}
        {/* <div>点击加载更多</div> */}
      </div>
      <Loading />
    </div>
  )
}
export default connect(
  (state: any)=>({
    flag:state.flag,
  }),
  dispatch=>({
    toggleLoading:(status:boolean)=>dispatch(toggleLoading(status)),
    toggleFlag:(flag:string)=>dispatch(toggleFlag(flag))
  })
)(Home)
