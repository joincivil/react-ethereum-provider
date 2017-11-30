'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withEthereum = withEthereum;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withEthereum() {

  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
      _inherits(WithEthereum, _React$Component);

      function WithEthereum(props, context) {
        _classCallCheck(this, WithEthereum);

        var _this = _possibleConstructorReturn(this, (WithEthereum.__proto__ || Object.getPrototypeOf(WithEthereum)).call(this, props, context));

        _this.receiveUpdatedState = function (state) {
          _this.setState(state);
        };

        _this.ethereum = context.ethereum;
        _this.state = _this.ethereum.getState();
        _this.ethereum.subscribe(_this.receiveUpdatedState);
        return _this;
      }

      _createClass(WithEthereum, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.ethereum.unsubscribe(this.receiveUpdatedState);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { ethereum: this.state }));
        }
      }]);

      return WithEthereum;
    }(_react2.default.Component), _class.contextTypes = { ethereum: _propTypes2.default.object.isRequired }, _temp;
  };
}