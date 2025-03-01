# Simple Registration Form

## Overview
This project is a simple registration form built using React for the frontend, Flask for the backend, and MySQL for data storage. The form collects user details (name, email, phone, and city) and saves them to a MySQL database through a RESTful API.

## Technologies Used
- **Frontend:** React, Axios
- **Backend:** Flask, Flask-CORS, MySQL Connector
- **Database:** MySQL

## Features
- User registration with name, email, phone, and city.
- REST API built with Flask.
- MySQL database integration.
- Cross-Origin Resource Sharing (CORS) enabled.

## Project Structure
```
registration-project/
│── backend/ (Flask app)
│   ├── app.py
│   ├── config.py
│   ├── database.sql
│   ├── requirements.txt
│── frontend/ (React app)
│   ├── src/
│   │   ├── App.js
│   │   ├── RegistrationForm.js
│   │   ├── api.js
│   ├── package.json
│── README.md
```

## Setup Instructions

### 1. Database Setup (MySQL)
Create and configure the MySQL database:
```sql
CREATE DATABASE registration_db;
USE registration_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    city VARCHAR(100)
);
```

### 2. Backend Setup (Flask)
1. Navigate to the `backend/` directory:
   ```sh
   cd backend
   ```
2. Create a virtual environment and install dependencies:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Start the Flask server:
   ```sh
   python app.py
   ```

### 3. Frontend Setup (React)
1. Navigate to the `frontend/` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

### 4. Running the Application
- Open `http://localhost:3000` in your browser to access the registration form.
- Ensure that the backend is running on `http://localhost:5000`.

## API Endpoints
| Method | Endpoint       | Description             |
|--------|--------------|-------------------------|
| POST   | `/register`  | Registers a new user    |

## Deployment
1. **Frontend Deployment:** Deploy the React app using Netlify, Vercel, or any hosting platform.
2. **Backend Deployment:** Use a cloud server like AWS, DigitalOcean, or Heroku.
3. **Database Deployment:** Host MySQL on a cloud provider like AWS RDS or PlanetScale.

## Contribution
Feel free to contribute by submitting issues or pull requests.

## License
This project is open-source and available under the MIT License.

