const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const LoadFactory = require('./build/LoadFactory.json');

const provider = new HDWalletProvider(
  'plate bridge husband potato lizard ladder rent shadow acid click cost recipe',
  'rinkeby.infura.io/v3/8a6fdc68063c4c148ac48081779a6598'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(LoadFactory.interface))
    .deploy({ data: LoadFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
