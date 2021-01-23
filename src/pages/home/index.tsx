import React, { useState, useEffect } from 'react'
import List from '../../components/list'
import Loading from '../../components/loading'
import { IItem } from '../../constantTypes/listTypes'

import './index.less'

const testData :Array<IItem> = [
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

const Home: React.FunctionComponent = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([] as Array<IItem>);
  const [flag, setFlag] = useState('newest');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // 模拟切换数据
      if (flag === 'newest') {
        setData(testData);
      } else {
        setData(testData2);
      }
    }, 1000)
  }, [flag])

  return (
    <div className="wrap">
      <div className="navbar">
        <div className="navbar-inner">
          <div className={ flag==="newest" ? "flag-btn flag-btn-on":"flag-btn"} onClick={() => setFlag('newest')}>最新</div>
          <div className={ flag==="hotest" ? "flag-btn flag-btn-on":"flag-btn"} onClick={() => setFlag('hotest')}>热门</div>
        </div>
      </div>
      <div className="list-wraper">
        <List data={data} />
      </div>
      <Loading loading={loading} />
    </div>
  )
}
export default Home
