import config from '@/assets/config'

export const state = () => ({
  txs: [],
  total_txs: 0
})

export const getters = {
  txs: state => {
    return state.txs
  },
  total_txs: state => {
    return state.total_txs
  }
}

export const mutations = {
  setTxs(state, payload) {
    state.txs = payload
  },
  setTotalTxs(state, payload) {
    state.total_txs = payload
  }
}

export const actions = {
  async fetchLatestTransactions({ commit }) {
    try {
      const data = await fetch(`http://localhost:8000/txs`).then(res => res.json())

      commit(`setTxs`, data.docs)
      commit(`setTotalTxs`, data.total)
    } catch (error) {
      console.log(error)
    }
  }
}
