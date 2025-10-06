const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  ping: () => 'pong'
});
