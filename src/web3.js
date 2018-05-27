import Web3 from 'web3';

/*
    Extract Metamask's injected Web3 to have access to it's Rinkeby Test Network
 */
const web3 = new Web3(window.web3.currentProvider);

export default web3; 

