# CRUD Operations using Node.js and MongoDB
## 📜 Description
This is a simple CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express.js**, and **MongoDB**.  
It provides RESTful APIs to interact with a MongoDB database.
## 📖 Table of Contents
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [API Endpoints](#-api-endpoints)
- [Testing](#-testing-the-api)
- [Author](#-author)
## 🛠️ Technologies Used
- **Node.js** (Backend)
- **Express.js** (Web Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **Postman** (For API Testing)
## 📂 Project Structure

## 🔧 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/crud-app.git
cd crud-app
### 2️⃣ Install dependencies
npm install
### 3️⃣ Set up environment variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
### 4️⃣ Start the server
npm start

---
```md
## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/items` | Create a new item |
| `GET` | `/api/items` | Get all items |
| `GET` | `/api/items/:id` | Get an item by ID |
| `PUT` | `/api/items/:id` | Update an item |
| `DELETE` | `/api/items/:id` | Delete an item |

## 📮 Testing the API
Use **Postman** or **cURL** to test the endpoints.

Example: Create a new item using `cURL`:
```sh
curl -X POST http://localhost:5000/api/items \
-H "Content-Type: application/json" \
-d '{"name": "Sample Item", "price": 10}'

---
```md
## 🛠️ Future Improvements
- Implement authentication (JWT)
- Add frontend UI (React)
- Improve error handling

## 📌 Author
- **Felix Idalia**  
- GitHub: [your-username](https://github.com/FELIX-IDALIA)  
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)  


