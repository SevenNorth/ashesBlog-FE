import request from '../utils/request'
import API from './constant'

export const getCatalogue=()=>request({
  url:API.CATALOGUE,
  method:"GET"
})