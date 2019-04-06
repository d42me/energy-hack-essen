import web3 from './web3';
const LoadFactory = require('./build/LoadFactory.json');

const instance = new web3.eth.Contract(
  JSON.parse(LoadFactory.interface),
  '0x1De787D8eEDfE61B75a59A1bE684c58c89b8Bb4c'
);

export default instance;
