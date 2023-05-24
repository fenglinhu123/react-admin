import service from "../utils/request.js";

export function infoList(data){
  return service.request({
    url: '/xxx',
    method: 'post',
    data
  })
}

export function infoDetailed(data){
  return service.request({
    url: '/xxx',
    method: 'post',
    data
  })
}