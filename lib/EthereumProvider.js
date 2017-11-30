'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _EthereumService = require('./EthereumService');

var _EthereumService2 = _interopRequireDefault(_EthereumService);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EthereumProvider = function (_Component) {
  _inherits(EthereumProvider, _Component);

  function EthereumProvider(props, context) {
    _classCallCheck(this, EthereumProvider);

    var _this = _possibleConstructorReturn(this, (EthereumProvider.__proto__ || Object.getPrototypeOf(EthereumProvider)).call(this, props, context));

    if (!_this.props.web3) {
      throw new Error("EthereumProvider was not passed a web3 instance. Make sure you pass it in via the \"web3\" prop.',");
    }

    _this.state = {
      ethereum: (0, _EthereumService2.default)(_this.props.web3)
    };

    return _this;
  }

  _createClass(EthereumProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        ethereum: this.state.ethereum
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return EthereumProvider;
}(_react.Component);

EthereumProvider.childContextTypes = {
  ethereum: PropTypes.object.isRequired
};
exports.default = EthereumProvider;