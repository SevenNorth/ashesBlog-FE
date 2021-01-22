import React, { useState, useEffect } from 'react'
import List from '../../components/list'
import Loading from '../../components/loading'

const testData = [
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

const testData2 = [
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
  const [data, setData] = useState(testData);
  const [flag, setFlag] = useState('newest');

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      // 模拟切换数据
      if(flag==='newest'){
        setData(testData);
      }else{
        setData(testData2);
      }
    },1000)
  },[flag])

  return (
    <div className="wrap">
      <div className="navbar">
        <button onClick={()=>setFlag('newest')}>最新</button>  <button onClick={()=>setFlag('hotest')}>热门</button>
      </div>
      <div className="list-content">
        <List data={data} />
      </div>
      <Loading loading={loading} />
    </div>
  )
}
export default Home
