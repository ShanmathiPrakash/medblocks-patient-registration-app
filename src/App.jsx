import { PGlite } from "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js";

const db = new PGlite("idb://patient-db");

async function initDatabase() {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      date_of_birth DATE NOT NULL,
      gender TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      address TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

async function addPatient(patient) {
  await db.query(
    `INSERT INTO patients (first_name, last_name, date_of_birth, gender, email, phone, address)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      patient.first_name,
      patient.last_name,
      patient.date_of_birth,
      patient.gender,
      patient.email,
      patient.phone,
      patient.address,
    ]
  );
}

async function getPatients() {
  const result = await db.query("SELECT * FROM patients ORDER BY created_at DESC");
  return result.rows;
}

function renderPatients(patients) {
  const list = document.getElementById("patient-list");
  list.innerHTML = "";
  patients.forEach((patient) => {
    const item = document.createElement("li");
    item.textContent = `${patient.first_name} ${patient.last_name}`;
    list.appendChild(item);
  });
}

document.getElementById("registration-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const patient = {
    first_name: document.getElementById("first-name").value,
    last_name: document.getElementById("last-name").value,
    date_of_birth: document.getElementById("dob").value,
    gender: document.getElementById("gender").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
  };

  await addPatient(patient);
  const patients = await getPatients();
  renderPatients(patients);
});

initDatabase().then(async () => {
  const patients = await getPatients();
  renderPatients(patients);
});

