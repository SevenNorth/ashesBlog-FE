const flag = (state = 'newest' , action: any)=>{
  switch (action.type) {
    case 'TOGGLE_FLAG':
      return action.flag;
    default:
      return state;
  }
}
export default flag;