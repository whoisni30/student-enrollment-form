# student-enrollment-form
````markdown
# Student Enrollment Form (JPDB Micro Project)

A simple yet effective web-based form to manage student enrollment data using JsonPowerDB (JPDB) API.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

This project allows users to save, update, and reset student enrollment data directly into JPDB using REST APIs. It’s part of the JsonPowerDB Internship Assignment, showcasing practical skills in HTML, CSS, JavaScript, and API integration.

---

## 🔧 Features

- Realtime interaction with JsonPowerDB (JPDB)
- Save new student records
- Update existing records using Roll Number
- Reset form with one click
- Professional, responsive UI

---
📁 Input Fields

| Field           | Description          |
|----------------|----------------------|
| Roll-No         | Primary Key (Required) |
| Full-Name       | Student's Full Name  |
| Class           | Student's Class      |
| Birth-Date      | Date of Birth        |
| Address         | Student Address      |
| Enrollment-Date | Date of Enrollment

## 📦 Installation

### Clone this repository:

```bash
git clone https://github.com/your-username/student-enrollment-form.git
cd student-enrollment-form
````

### Open in Browser:

Just open `index.html` in any browser (Chrome, Firefox, Edge).

---

## 🚀 Usage Example

1. Enter the **Roll Number**.
2. If the record does not exist:

   * Fill out the rest of the form.
   * Click **Save** to add the record.
3. If the record exists:

   * Existing details will auto-populate.
   * Edit fields and click **Update** to modify the record.
4. Use **Reset** to clear the form anytime.

![Screenshot](assets/screenshot.png)

*For more screenshots and advanced usage, refer to the [Wiki](https://github.com/your-username/student-enrollment-form/wiki).*

---

## 🛠 Development Setup

> This is a pure front-end project, no Node.js required.

But to contribute and test on a local dev server:

```bash
npm install -g live-server
live-server
```

> Ensure CORS is enabled or use a browser plugin to allow local REST calls.

---

## 📘 Release History

* 1.0.0

  * First stable release 🎉
  * Features: Save, Update, Reset form using JPDB
  * Design improvements and validation

---

## 🤝 Contributing

1. Fork it: [https://github.com/your-username/student-enrollment-form/fork](https://github.com/your-username/student-enrollment-form/fork)
2. Create your feature branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/feature-name`
5. Submit a pull request 🛠

---

📄 Meta

Nitish Kumar – [@niitishkr](https://twitter.com/) – [nitishkr4web@gmail.com](mailto:nitishkr4web@gmail.com)
Distributed under the **MIT** license. See `LICENSE` for more information.
GitHub Repository: [https://github.com/whoisni30/student-enrollment-form](https://github.com/your-username/student-enrollment-form)

---

> Made with ❤️ using HTML, CSS, JavaScript, and JPDB API

```
