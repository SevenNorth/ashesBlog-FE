import React from 'react'
import { CircularProgress } from '@material-ui/core'

import './index.less'
import { connect } from 'react-redux'

const Loading = (props:{loading:boolean}) => {
  return (
    props.loading
    ?
    <div className="loading">
      <CircularProgress />
    </div>
    :
    <div className="none"></div>
  )
}

export default connect(
  (state:any)=>({
    loading: state.loading,
  })
)(Loading)