const net = require('net');
const jsonSocket = require('json-socket');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

var client = new jsonSocket(new net.Socket());


module.exports.connect = function() {
  client.connect(config.planetId_port, config.planetId_host, () => {
    console.log('Connected to planetId server');
  });
};

module.exports.send = function(x) {
  client.sendMessage(x);
};
