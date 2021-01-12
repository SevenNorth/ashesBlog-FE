import React from 'react'

import ListItem from '../../components/list'

const Home :React.FunctionComponent = () =>{
  return (
    <div>
      <ListItem title={'test'} summary={'123123123'} tags={[1,2,3]}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </ListItem>
    </div>
  )
}
export default Home
