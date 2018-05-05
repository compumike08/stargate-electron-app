/* eslint-disable no-console */

const net = require('net');
const childProcess = require('child_process');

const port = process.env.PORT ? process.env.PORT - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => {
  client.connect({ port }, () => {
    client.end();
    if (!startedElectron) {
      const { exec } = childProcess;
      console.log('starting electron');
      startedElectron = true;
      exec('npm run electron');
    }
  });
};

tryConnection();

client.on('error', () => {
  setTimeout(tryConnection, 1000);
});