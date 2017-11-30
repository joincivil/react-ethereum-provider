import React from 'react'
import Web3 from 'web3'

import { EthereumProvider } from '../src/index';

import ExampleComponent from './ExampleComponent'

export default () => {
  return (
    <EthereumProvider web3={Web3}>
      <ExampleComponent />
    </EthereumProvider>
  )
}
