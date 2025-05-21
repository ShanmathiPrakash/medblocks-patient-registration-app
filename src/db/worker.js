// db/worker.js
importScripts('indexeddb.js');

onmessage = (e) => {
  const { action, data } = e.data;
  switch (action) {
    case 'open':
      openDatabase();
      break;
    case 'add':
      addPatient(data);
      break;
    case 'get':
      postMessage(getPatients());
      break;
    default:
      postMessage({ error: 'Unknown action' });
  }
};
