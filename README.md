# WorkoutBuddy - README

**WorkoutBuddy** is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) application designed to help users track their daily workouts. It offers a simple **CRUD** (Create, Read, Update, Delete) interface for managing workout sessions, allowing users to log details like exercises, duration, and date.

---

## 🚀 Features

- 🔐 **User Authentication**: Secure user login and registration using **JWT**.
- ✏️ **CRUD Operations**: Create, read, update, and delete workout entries.
- 📱 **Responsive Design**: Optimized for mobile and desktop devices.
- 🔗 **API Integration**: Backend APIs built using **Express.js** and **MongoDB**.
- 🖥️ **Interactive Frontend**: Built with **React.js** for a dynamic user experience.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (**JWT**)

---

## 🛠️ Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Lavoisier29/WorkoutBuddy.git
    cd WorkoutBuddy
    ```

2. **Install dependencies** for both the backend and frontend:
    - Backend:
      ```bash
      cd backend
      npm install
      ```
    - Frontend:
      ```bash
      cd ../frontend
      npm install
      ```

3. **Create a `.env` file** in the backend directory with the following details:
    ```env
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    PORT=5000
    ```

4. **Run the backend server**:
    ```bash
    cd backend
    npm start
    ```

5. **Run the frontend server**:
    ```bash
    cd ../frontend
    npm start
    ```

6. The app will be accessible at:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend/API: [http://localhost:5000](http://localhost:5000)

---

## 📌 API Endpoints

- **GET** `/api/workouts`: Retrieve all workouts.
- **POST** `/api/workouts`: Create a new workout.
- **GET** `/api/workouts/:id`: Retrieve a single workout by ID.
- **PUT** `/api/workouts/:id`: Update a workout by ID.
- **DELETE** `/api/workouts/:id`: Delete a workout by ID.

---

## 🤝 Contributing

Feel free to submit issues or pull requests. Contributions to improve the project are always welcome!

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
