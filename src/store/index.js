import Vuex from 'vuex'
const state = {
  userInfo: {},
}
const getters = {
  userName(state) {
    return state.userInfo.name
  },
}
const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload
  },
}
const actions = {}
export default Vuex.createStore({
  state,
  getters,
  mutations,
  actions,
})
