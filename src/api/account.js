import service from "../utils/request.js";

export function registerUser(data){
    return service.request({
        url: "/user/register",
        method: "post",
        data
    })
}

export function loginUser(data){
    return service.request({
        url: "/user/login",
        method: "post",
        data
    })
}

export function getCodeContent(){
    return service.request({
        url: "/code/getCode",
        method: "get",
    })
}