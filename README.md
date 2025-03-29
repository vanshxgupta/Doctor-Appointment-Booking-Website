# Doctor Appointment System

## Overview
The **Doctor Appointment System** is a comprehensive web application designed to streamline the process of booking and managing doctor appointments. It provides a user-friendly interface for patients to book appointments, view doctor availability, and manage their personal profiles. Admins have the ability to oversee appointments and manage doctor information, ensuring an organized and efficient system.

## Features

### User Role
- **Home Page:** Overview of the system with general information and announcements.
- **About Page:** Details about the system, its purpose, and benefits for users.
- **Contact Page:** Contact form for inquiries, support, and feedback.
- **Doctors Page:** List of available doctors with profiles including specialization, experience, and availability.
- **My Appointments:** View and manage booked appointments with details like date, time, and doctor.
- **My Profile:** View and update personal information such as name, contact details, and medical history.
- **Authentication:** Secure login and logout functionality with token-based authentication using Context API.

### Admin Role
- **Dashboard:** Overview of system statistics such as total appointments, active users, and available doctors.
- **Manage Appointments:** View, approve, or cancel user appointments.
- **Manage Doctors:** Add, update, or remove doctor profiles with comprehensive details.
- **User Management:** View and manage user profiles and resolve any issues.

## Technologies Used

### Frontend
- **React.js:** For building dynamic and responsive user interfaces.
- **Context API:** For efficient state management and handling authentication.
- **Tailwind CSS:** For styling and responsive design.

### Backend
- **Node.js/Express.js:** For handling server-side logic and routing.
- **MongoDB:** For database management and storing user, doctor, and appointment data.
- **JWT (JSON Web Tokens):** For secure authentication.

## Installation

### Prerequisites
- Node.js installed on your machine.
- MongoDB database setup and running.

### Steps to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/doctor-appointment-system.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd doctor-appointment-system
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Setup environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI, JWT secret, and other required environment variables.

5. **Run the development server:**
   ```bash
   npm start
   ```

6. **Open the application in your browser:**
   ```
   http://localhost:3000
   ```

## Usage

### For Users
- **Register:** Create a new account with personal and contact details.
- **Login:** Secure authentication using JWT.
- **Book Appointment:** Select a doctor and book an available time slot.
- **Manage Appointments:** View upcoming appointments or cancel if needed.
- **Update Profile:** Edit personal information and preferences.

### For Admins
- **Monitor System:** Access dashboard with key statistics.
- **Manage Doctors:** Add or remove doctors, update profiles.
- **Oversee Appointments:** Approve, reschedule, or cancel appointments.
- **Handle User Queries:** Address user issues and feedback.

## Project Structure
```
/doctor-appointment-system
├── /backend
│   ├── /models
│   ├── /routes
│   ├── /controllers
│   └── server.js
├── /frontend
│   ├── /components
│   ├── /pages
│   ├── /context
│   └── /App.js
├── .env
├── package.json
└── README.md
```

## Contributing
Contributions are welcome! To contribute:
- Fork the repository.
- Create a new branch for your feature.
- Submit a pull request for review.

## License
This project is licensed under the [MIT License](LICENSE).



