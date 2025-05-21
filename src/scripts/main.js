// scripts/main.js
const worker = new Worker('db/worker.js');

worker.onmessage = (e) => {
  const data = e.data;
  if (data.error) {
    console.error(data.error);
  } else {
    // Handle retrieved patient data
  }
};

const addPatient = (patient) => {
  worker.postMessage({ action: 'add', data: patient });
};

const getPatients = () => {
  worker.postMessage({ action: 'get' });
};
