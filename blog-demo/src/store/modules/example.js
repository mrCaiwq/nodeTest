import {exampleRequest, examplePost, registerPost, loginPost} from '../../api/example'

const state = {

}

const mutations = {

}

const actions = {
    exampleGet({commit, state}){
        return exampleRequest().then(data => {
            return data
        }) 
    },
    exampleCreate({commit, state},msg){
        return examplePost(msg).then(data => {
            return data
        })
    },
    register({commit, state},msg){
        return registerPost(msg).then(data => {
            return data
        })
    },
    login({commit, state}, msg){
        return loginPost(msg).then(data => {
            return data
        })
    }
}

export default {
    state,
    mutations,
    actions
}