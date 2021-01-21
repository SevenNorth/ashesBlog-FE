import React from 'react'
import { useState } from 'react'
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
  let data = testData
  
  const [loading, setLoading] = useState(false)
  const toggle=async (key:number)=>{
    setLoading(true);
    if(key===1){
      data=testData
    }else if(key === 2){
      data = testData2
    }
    await setTimeout(()=>{},3000)
    console.log(1,loading);
    setLoading(false);
    console.log(2,loading);
  }

  return (
    <div className="wrap">
      <div className="navbar">
        <button onClick={()=>toggle(1)}>最新</button>  <button onClick={()=>toggle(2)}>热门</button>
      </div>
      <div className="list-content">
        <List data={data} />
      </div>
      <Loading loading={loading} />
    </div>
  )
}
export default Home
