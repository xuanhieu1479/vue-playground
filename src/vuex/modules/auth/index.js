import { LOGIN, UPDATE_USER_PROFILE, LOGOUT } from "./mutation-types"
import actions from "./actions"
import router from "@/router"

const state = {
    auth: {
        userProfile: null
    }
}

const getters = {
    userProfile: state => state.auth.userProfile,
}

const mutations = {
    [LOGIN]: (state, userProfile) => {
        state.auth.userProfile = userProfile
        router.push({ name: 'home' })
    },
    [LOGOUT]: (state) => {
        state.auth.userProfile = null
        router.push({ name: 'login' })
    },
    [UPDATE_USER_PROFILE]: (state, newProfile) => {
        state.auth.userProfile = newProfile
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
};