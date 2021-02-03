export const toggleShowTags = (showHot:boolean = true) =>({
  type:'TOGGLE_SHOW_HOT',
  showHot,
})

export const addHistorySearch = (history:string) => ({
  type:'ADD_HISTORY_SEARCH',
  history
})

export const delHistorySearch = (id:number) => ({
  type:'DEL_HISTORY_SEARCH',
  id
})

export const clearHistorySearch = () => ({
  type:'CLEAR_HISTORY_SEARCH',
})