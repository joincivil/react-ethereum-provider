## react-ethereum-provider

A simple provider to make it easier to connect to web3 / Ethereum.

Note that your App must be wrapped in an `<EthereumProvider>` component that passes in the web3 object.

This library is still a work in progress. I intend to build out more methods as they are required in our apps.


### Usage

Example Component:
```javascript
import React from 'react'
import { withEthereum } from 'react-ethereum-provider'

const MyComponent = (props) => {
  const connected = props.ethereum.connected

  if(connected === null) return <div>Loading... </div>
  else if (!connected) return <div>Not connected to Ethereum</div>
  else {
    return <div>Connected to Ethereum!</div>
  }

}

export default withEthereum()(MyComponent)
```
Example app:
```javascript

import React from 'react'
import Web3 from 'web3'
import { EthereumProvider } from 'react-ethereum-provider'

import ExampleComponent from './ExampleComponent'

export default () => {
  return (
    <EthereumProvider web3={Web3}>
      <ExampleComponent />
    </EthereumProvider>
  )
}



```

### Future work
Currently this library expects web3.js, however I think I might abstract it a bit to accept either EthJS or web3.js in the future.
Send a pull request if you add something useful!
