import { combineReducers } from 'redux';
import loading from './loading'
import flag from './flag'
import discovery from './discovery'

export default combineReducers({
  loading,
  flag,
  discovery
})