import React from 'react'
import PropTypes from 'prop-types'

export function withEthereum(){

  return (WrappedComponent) => {
    return class WithEthereum extends React.Component {

      static contextTypes = { ethereum: PropTypes.object.isRequired }

      constructor(props, context){
        super(props, context)
        this.ethereum = context.ethereum
        this.state = this.ethereum.getState()
        this.ethereum.subscribe(this.receiveUpdatedState)
      }
      receiveUpdatedState = (state) => {
        this.setState(state)
      }
      componentWillUnmount(){
        this.ethereum.unsubscribe(this.receiveUpdatedState)
      }
      render() {
        return <WrappedComponent {...this.props} ethereum={this.state} />;
      }
    }
  }

}