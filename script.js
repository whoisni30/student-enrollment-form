const token = "90934569|-31949213366526475|90956627";
const dbName = "SCHOOL-DB";
const relName = "STUDENT-TABLE";
const baseURL = "https://api.login2explore.com:5577";

document.getElementById("roll").addEventListener("blur", checkRollNo);
document.getElementById("saveBtn").addEventListener("click", saveData);
document.getElementById("updateBtn").addEventListener("click", updateData);
document.getElementById("resetBtn").addEventListener("click", resetForm);

function enableFormFields() {
  ["name", "class", "birth", "address", "enroll"].forEach(id => {
    document.getElementById(id).disabled = false;
  });
}

function disableFormFields() {
  ["name", "class", "birth", "address", "enroll"].forEach(id => {
    document.getElementById(id).disabled = true;
  });
  document.getElementById("saveBtn").disabled = true;
  document.getElementById("updateBtn").disabled = true;
}

function checkRollNo() {
  const roll = document.getElementById("roll").value.trim();
  if (!roll) return;

  const getByKeyRequest = {
    token,
    dbName,
    rel: relName,
    cmd: "GET_BY_KEY",
    key: JSON.stringify({ Roll_No: roll })
  };

  fetch(`${baseURL}/api/iml`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getByKeyRequest)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 400) {
        enableFormFields();
        document.getElementById("saveBtn").disabled = false;
      } else {
        fillForm(data.data);
        document.getElementById("updateBtn").disabled = false;
      }
    });
}

function fillForm(data) {
  document.getElementById("name").value = data.Full_Name;
  document.getElementById("class").value = data.Class;
  document.getElementById("birth").value = data.Birth_Date;
  document.getElementById("address").value = data.Address;
  document.getElementById("enroll").value = data.Enrollment_Date;
  enableFormFields();
  document.getElementById("roll").disabled = true;
}

function getFormData() {
  return {
    Roll_No: document.getElementById("roll").value.trim(),
    Full_Name: document.getElementById("name").value.trim(),
    Class: document.getElementById("class").value.trim(),
    Birth_Date: document.getElementById("birth").value,
    Address: document.getElementById("address").value.trim(),
    Enrollment_Date: document.getElementById("enroll").value
  };
}

function saveData() {
  const data = getFormData();
  const putRequest = {
    token,
    dbName,
    rel: relName,
    cmd: "PUT",
    jsonStr: JSON.stringify(data)
  };

  fetch(`${baseURL}/api/iml`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(putRequest)
  }).then(() => resetForm());
}

function updateData() {
  const data = getFormData();
  const updateRequest = {
    token,
    dbName,
    rel: relName,
    cmd: "UPDATE",
    jsonStr: JSON.stringify(data)
  };

  fetch(`${baseURL}/api/iml`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateRequest)
  }).then(() => resetForm());
}

function resetForm() {
  document.getElementById("enrollForm").reset();
  disableFormFields();
  document.getElementById("roll").disabled = false;
  document.getElementById("roll").focus();
}
