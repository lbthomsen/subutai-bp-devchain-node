var web3 = require('web3');
var net = require('net');

var config = function () {
  
  this.logFormat = "combined";
  this.ipcPath = "/var/spool/parity/jsonrpc.ipc";
  this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names = {
    "0x00ad75B60e743033b6C42FCeE599e7bdE7eF0202": "Validator 1",
    "0x002CE19f5e7cdd15cd7Ca6bbae0E3a5Aa4f1df5e": "Validator 2",
    "0x00bb4AF129746f92A8c19438F0baa39E81F0Ea24": "Validator 3",
    "0x0086798562C3a3B1A5c4Fd11FF1E49Bdf070bFB1": "Validator 4"
  }
  
}

module.exports = config;
