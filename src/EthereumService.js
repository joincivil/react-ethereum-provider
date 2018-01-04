


export default (Web3) => {

  const state = {
    connected: null,
    connection: { loading: true },
    accounts: { loading: true },
    sign: function(payload){
      if(!this.connected) throw new Error("Not connected")

      console.log("signing ", payload)
      return this.connection.web3.eth.personal.sign(payload, this.accounts.value[0])
    }
  }



  window.addEventListener('load', function(){
    let web3
    if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider);
      state.connected = true
      state.connection = { loading: false, web3: web3}

      web3.eth.getAccounts( (err, res) => {
        state.accounts = { loading: false, value: res }
        if(res === undefined || (Array.isArray(res) && res.length === 0) ){
          state.accounts.locked = true
        }
        publish()
      })

    } else {
      state.connected = false
      publish()
    }
  })


  let subscriptions = []

  function publish(){
    subscriptions.forEach( cb => cb(state))
  }

  return {
    getState: () => state,
    subscribe: (cb) => subscriptions.push(cb),
    unsubscribe: (cb) => {
      subscriptions = subscriptions.filter( x => x !== cb)
    }
  }
}
