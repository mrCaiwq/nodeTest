import { fetch } from '../utils/http'

export function exampleRequest(params = {}){
    return fetch({
        url: '/example/get',
        method: 'get',
        params
    })
}

export function examplePost (data){
    return fetch({
        url:'/example/post',
        method:'post',
        data:data,
    })
}

export function registerPost(data){
    return fetch({
        url:'/register',
        method:'post',
        data:data,
    })
}

export function loginPost(data) {
    return fetch({
        url:'/login',
        method: 'post',
        data: data,
    })
}