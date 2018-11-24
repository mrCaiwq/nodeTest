import {exampleRequest, examplePost} from '../../api/example'

const state = {

}

const mutations = {

}

const actions = {
    exampleGet({commit, state}){
        return exampleRequest().then(data => {
            return data
        }) 
    }
}

export default {
    state,
    mutations,
    actions
}