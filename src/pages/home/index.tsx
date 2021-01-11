import React from 'react'

import ListItem from '../../components/listItem'

const Home :React.FunctionComponent = () =>{
  return (
    <div>
      <ListItem title={'test'} summary={'123123123'} tags={[1,2,3]}/>
    </div>
  )
}
export default Home
