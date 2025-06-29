# Express.js Routing & Middleware – Node.js Backend Assignment

This project is a simple Express.js web server setup designed as part of Week 4 assignment for the Node.js Backend Developer Internship at **Celebal Technologies**.

## 📝 Objective

Set up a simple web server using **Express.js** that can handle basic routing and middleware. Implement routes to respond to at least two different endpoints.

## 📁 Project Structure

├── server.js # Main entry point of the application
├── routes
│ ├── user.js # Handles '/user' endpoint routes
│ └── information.js # Handles '/information' endpoint routes
├── middleware
│ └── middlewarepass.js # Middleware applied to the '/information' route
## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/express-routing-assignment.git
cd express-routing-assignment

npm install

Run the Server: node server.js or npm start or npm run dev

The server will start on http://localhost:3000.

Features:
Setup Express.js server
Created modular route handlers:
/user (GET, POST, PUT, PATCH, DELETE)
/information (GET, POST, PUT, PATCH, DELETE)
Applied middleware to /information routes

Concepts Used:
Express routing
Custom middleware
Modular code structure with Router
JSON responses with status messages

Sample Endpoints
1. /user
GET /user → Get user info
POST /user → Submit user details
PUT /user → Modify user data
PATCH /user → Update user data
DELETE /user → Delete user data

2. /information (middleware protected)
GET /information → Get information page
POST /information → Submit information
PUT /information → Modify information
PATCH /information → Update information
DELETE /information → Delete information

Middleware Explanation
Middleware is used before accessing the /information routes to simulate an access-check or logging system.
app.use('/information', middlewarepass, informationroute);

Name : Satyakam Tyagi
ID: CT_CSI_NJ_5521
Posiion: NodeJS Backend Developer Intern
Celebal Technologies
