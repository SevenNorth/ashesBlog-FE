import { combineReducers } from 'redux';
import loading from './loading'
import flag from './flag'

export default combineReducers({
  loading,
  flag
})