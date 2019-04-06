import web3 from './web3';
const Load = require('./build/Load.json');

const getLoadDetails = async address => {
  const instance = await new web3.eth.Contract(
    JSON.parse(Load.interface),
    address
  );
  let res = [];
  const properties = [
    'id',
    'idTag',
    'timestamp',
    'dueDate',
    'chargingPower',
    'batteryCapacity',
    'batteryStatus',
    'chargingStationId',
    'connectorId'
  ];
  for (const property of properties) {
    const temp = await instance.methods[property]().call();
    res.push(temp);
  }
  return res;
};

module.exports.getLoadDetails = getLoadDetails;
