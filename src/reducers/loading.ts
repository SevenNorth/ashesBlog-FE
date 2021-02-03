const loading = (state = false , action: any)=>{
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return action.status;
    default:
      return state;
  }
}
export default loading;