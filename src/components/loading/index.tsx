import { CircularProgress } from '@material-ui/core'
import React from 'react'

import './index.less'
export default function Loading(props:{loading:boolean}) {
  return (
    props.loading
    ?
    <div className="loading">
      <CircularProgress />
    </div>
    :
    <div></div>
  )
}
