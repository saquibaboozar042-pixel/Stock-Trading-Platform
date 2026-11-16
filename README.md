# Zerodha Clone – Stock Trading Platform

A full-stack stock trading platform inspired by Zerodha, built using the MERN stack. It provides user authentication and a trading dashboard to manage watchlists, buy orders, holdings, and positions.

## 🚀 Live Demo

- **Dashboard:** https://stock-trading-dashboard-app.netlify.app/
- **Authentication:** https://stock-trading-auth.netlify.app/


## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Deployment:** Netlify (Frontend), Render (Backend)
- **Version Control:** Git & GitHub

## 📁 Project Structure

- Stock-Trading-Platform/
- │
- ├── backend/          # Server-side code and REST APIs
- │
- ├── dashboard/        # Trading dashboard application
- │
- ├── frontend/         # User authentication and landing pages
- │
- ├── screenshots/      # Project screenshots
- │
- └── README.md


## ✨ Features

- User Signup and Login
- Secure Authentication using JWT
- Password Hashing using bcrypt
- Stock Watchlist
- Buy Orders
- Holdings Management
- Orders Management
- Positions Management
- Separate Authentication and Dashboard Applications
- MongoDB Database Integration

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

- git clone https://github.com/saquibaboozar042-pixel/Stock-Trading-Platform.git
- cd Stock-Trading-Platform

### 2. Backend Setup

Navigate to the backend folder:

- cd backend
- npm install


Create a .env file inside the backend folder and add the following environment variables:

- MONGO_URL=your_mongodb_connection_string
- TOKEN_KEY=your_jwt_secret
- PORT=3002


Start the backend server:

- npm start


### 3. Authentication Frontend Setup

- Open a new terminal from the project root directory:

- cd frontend
- npm install
- npm start


### 4. Dashboard Setup

- Open another terminal from the project root directory:

- cd dashboard
- npm install
- npm start

## 📸  Screenshots

### Landing Page

![Landing Page](screenshots/landing-page.png)

### Login Page

![Login Page](screenshots/login.png)

### Signup Page

![Signup Page](screenshots/signup.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Holdings

![Holdings](screenshots/holdings.png)

### Orders

![Orders](screenshots/orders.png)


## 👨‍💻 Author

**Saquib Aboozar**

- **GitHub:** https://github.com/saquibaboozar042-pixel

---

**Note:** This project was built for learning and demonstrating full-stack web development concepts. It is not a real brokerage platform and does not execute actual stock trades.
