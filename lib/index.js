'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withEthereum = require('./withEthereum');

Object.defineProperty(exports, 'withEthereum', {
  enumerable: true,
  get: function get() {
    return _withEthereum.withEthereum;
  }
});

var _EthereumProvider = require('./EthereumProvider');

Object.defineProperty(exports, 'EthereumProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EthereumProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }