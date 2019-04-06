pragma solidity ^0.4.17; 

contract LoadFactory {
    address[] public deployedLoads;

    function createLoad(
        uint16 _id, 
        uint32 _idTag, 
        uint256 _timestamp, 
        uint _dueDate, uint32 _chargingPower, 
        uint32 _batteryCapacity, uint8 _batteryStatus,
        uint8 _chargingStationId,
        uint8 _connectorId)
        public 
    {
        address newLoad = new Load(msg.sender, _id, _idTag, _timestamp, _dueDate, _chargingPower, 
            _batteryCapacity, _batteryStatus, _chargingStationId, _connectorId);
        deployedLoads.push(newLoad);
    }

    function getDeployedLoads() public view returns (address[]) {
        return deployedLoads;
    }
}


contract Load {
    address public sender;
    uint16 public id; //transactionId
    uint32 public idTag; //OCPP standard String20
    uint256 public timestamp; //OCPP standard by charging point, date but uint (planned starting time)
    uint256 public startCharging; // equal to timestamp if not shifted
    uint256 public dueDate; //defined through car user
    uint32 public chargingPower; //in W
    uint32 public batteryCapacity; //in Wh
    uint32 public batteryStatus; //in m% (e.g. 40000 = 40%)
    bytes32 public loadStatus; //dispatched, redispatched, reduced, redisptached & reduced (convert in frontend)
    bool public delivered; //true when charging finished
    uint8 public chargingStationId; // IP
    uint8 public connectorId; //OCPP standard 1,2,3,..

    function Load(
        address _sender,
        uint16 _id, 
        uint32 _idTag, 
        uint256 _timestamp, 
        uint _dueDate, uint32 _chargingPower, 
        uint32 _batteryCapacity, uint8 _batteryStatus,
        uint8 _chargingStationId,
        uint8 _connectorId)
        public 
    {
        sender = _sender;
        id = _id;
        idTag = _idTag;
        timestamp = _timestamp;
        startCharging = _timestamp; //no smart charging in MVP1
        dueDate = _dueDate;
        chargingPower = _chargingPower;
        batteryCapacity = _batteryCapacity;
        batteryStatus = _batteryStatus;
        loadStatus = "0x646973706174636865640000000000"; //dispatched = 0x646973706174636865640000000000
        delivered = false; //will be changed when charging finished
        chargingStationId = _chargingStationId;
        connectorId = _connectorId;
    }
}