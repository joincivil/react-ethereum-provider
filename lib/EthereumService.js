"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Web3) {

  var state = {
    connected: null,
    connection: { loading: true },
    accounts: { loading: true },
    sign: function sign(payload) {
      if (!this.connected) throw new Error("Not connected");

      console.log("signing ", this.connection.web3);
      var data = JSON.stringify(payload);
      this.connection.web3.eth.personal.sign(data, this.accounts.value[0], function (err, result) {
        console.log("sign", payload, err, result);
      });
    }
  };

  window.addEventListener('load', function () {
    var web3 = void 0;
    if (typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider);
      state.connected = true;
      state.connection = { loading: false, web3: web3 };

      web3.eth.getAccounts(function (err, res) {
        state.accounts = { loading: false, value: res };
        if (res === undefined || Array.isArray(res) && res.length === 0) {
          state.accounts.locked = true;
        }
        publish();
      });
    } else {
      state.connected = false;
      publish();
    }
  });

  var subscriptions = [];

  function publish() {
    subscriptions.forEach(function (cb) {
      return cb(state);
    });
  }

  return {
    getState: function getState() {
      return state;
    },
    subscribe: function subscribe(cb) {
      return subscriptions.push(cb);
    },
    unsubscribe: function unsubscribe(cb) {
      subscriptions = subscriptions.filter(function (x) {
        return x !== cb;
      });
    }
  };
};