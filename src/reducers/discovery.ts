import { combineReducers } from 'redux';
import { getLocalSorage, setLocalSorage } from '../utils/LocalStorage';
const showHot = (state = true , action: any)=>{
  switch (action.type) {
    case 'TOGGLE_SHOW_HOT':
      return action.showHot;
    default:
      return state;
  }
}

const historySearch = (state=getLocalSorage('historySearch'),action:any) => {
  let newState = [...state]
  switch (action.type) {
    case 'ADD_HISTORY_SEARCH':
      newState = newState.filter((history:string)=>history!==action.history)
      newState.unshift(action.history)
      setLocalSorage('historySearch',JSON.stringify(newState))
      return newState;
    case 'DEL_HISTORY_SEARCH':
      newState = state.filter((history:string,index:number)=>index!== action.id);
      setLocalSorage('historySearch',JSON.stringify(newState))
      return newState;
    case 'CLEAR_HISTORY_SEARCH':
      newState=[]
      setLocalSorage('historySearch',JSON.stringify(newState))
      return newState;
    default:
      return state;
  }
}

const discovery = combineReducers({
  showHot,
  historySearch
})
export default discovery;