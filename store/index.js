export const state = () => ({
  someValue: ''
})

export const mutations = {
  changeSomeValue (state, newValue) {
    this.meanWhileFn('accessible in mutations')
    state.someValue = newValue
  }
}

export const actions = {
  setSomeValueToWhatever ({ commit }) {
    this.meanWhileFn('accessible in actions')
    const newValue = 'whatever'
    commit('changeSomeValue', newValue)
  }
}
