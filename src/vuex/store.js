import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      userProfile: {
        name: 'alabama'
      },
    }
  },
  mutations: {
    updateUserProfile (state, newProfile) {
        state.userProfile  = newProfile
    }
  }
})

export default store;