# student-enrollment-form

````markdown
# 🎓 Student Enrollment Form - JPDB Micro Project

A simple, dynamic student enrollment form built using **HTML, CSS, JavaScript**, and powered by JsonPowerDB (JPDB). This form allows Create, Read, and Update operations with a real-time JSON database via REST API calls.

## 🔗 Hosted Demo
[View Live](https://your-demo-link.netlify.app) *(Add link if hosted)*

---

## 📌 Features

- 🔐 Validates form inputs before submission
- 📦 Uses **JPDB API** for storing and updating student data
- 🎯 Based on roll number as a **primary key**
- 🧠 Intelligent control button behavior:
  - `Save` for new records
  - `Update` for existing entries
  - `Reset` to clear the form

---

## 📁 Input Fields

| Field           | Description          |
|----------------|----------------------|
| Roll-No         | Primary Key (Required) |
| Full-Name       | Student's Full Name  |
| Class           | Student's Class      |
| Birth-Date      | Date of Birth        |
| Address         | Student Address      |
| Enrollment-Date | Date of Enrollment   |

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend (DB)**: JsonPowerDB (JPDB)

---

## ⚙️ How It Works

1. On page load:
   - Only Roll-No field is active.
   - Other fields and buttons are disabled.

2. When Roll-No is entered:
   - If not found → Enables Save/Reset, allows form fill-up.
   - If found → Displays existing data, enables Update/Reset.

3. All fields must be filled before Save/Update.

---

## 📦 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/student-enrollment-form.git
   cd student-enrollment-form
````

2. Open `index.html` in your browser.

> ⚠️ Make sure to replace `connToken`, `dbName`, `relName`, and base URL with your JPDB credentials in `script.js`.

---

 📄 JPDB API Reference

* **Base URL:** `https://api.login2explore.com:5577`
* **Save API:** `/api/iml`
* **Get API:** `/api/irl`
* **Update API:** `/api/iml`

---

📜 License

This project is licensed under the MIT License.

---

🙋‍♂️ Author

**Nitish Kumar**
📧 [nitishkr4web@gmail.com](mailto:nitishkr4web@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/nitish-kumar-69b32b232)
```
