const setLocalSorage = (name:string, payload:string) => {
  localStorage.setItem(name,payload)
}
const getLocalSorage = (name:string) => {
  const lsItemString:string = localStorage.getItem(name) || "{}"
  let lsItem
  try{
    lsItem = JSON.parse(lsItemString)
  }catch(e){
    lsItem = []
  }
  return lsItem
}
export {
  setLocalSorage,
  getLocalSorage
}