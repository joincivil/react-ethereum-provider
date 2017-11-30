import React from 'react'
import {withEthereum} from "../src/withEthereum"

const MyComponent = (props) => {
  const connected = props.ethereum.connected

  if(connected === null) return <div>Loading... </div>
  else if (!connected) return <div>Not connected to Ethereum</div>
  else {
    return <div>Connected to Ethereum!</div>
  }

}

export default withEthereum()(MyComponent)