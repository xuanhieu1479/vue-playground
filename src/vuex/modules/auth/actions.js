import axios from 'axios';
import { LOGIN, UPDATE_USER_PROFILE, LOGOUT } from './mutation-types'

const actions = {
    login: async ({ commit }, loginInfo) => {
        const { username, password } = loginInfo
        const { data } = await axios.get('/random')
        const user = {
            username: data.entries[0].API,
        }
        commit(LOGIN, user)
    },
    logout: ({ commit }) => {
        commit(LOGOUT)
    },
    updateUserProfile: ({ commit }, newProfile) => {
        commit(UPDATE_USER_PROFILE, newProfile)
    }
}

export default actions;
