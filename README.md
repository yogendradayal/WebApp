# 💬 PingNet – Real-Time Chat Application

PingNet is a real-time chat platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. It allows users to create accounts, send and receive private messages instantly, and enjoy a seamless chat experience across devices.

## 🚀 Live Demo

🔗 [Click here to try the app live](https://webchat-app-k8yk.onrender.com)

---

## ✨ Features

- 🔒 Secure JWT Authentication
- 💬 Real-time messaging via Socket.IO
- 📥 Persistent chat history using MongoDB
- 🙍‍♂️ Private 1-on-1 messaging
- ✅ Online/offline user status indicator
- 🧠 Clean and responsive UI with Tailwind CSS
- 🔁 Auto scroll and smooth chat UX
- ⚡ Fast, efficient, and scalable

---

## 📂 Project Structure

```bash
WebApp/
├── backend/            # Node.js + Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── frontend/           # React.js Client
│   ├── components/
│   ├── pages/
│   └── utils/
└── README.md
```
---

## Installation

1. Clone the repository:

   ```bash
   git clone (https://github.com/yogendradayal/WebApp)
   cd webchat-app
   ```

2. Install the server dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install the client dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the `server` directory and add the following environment variables:

   ```bash
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start the development server:

   - **Server:**

     ```bash
     cd backend
     npm run dev
     ```

   - **Client:**

     ```bash
     cd frontend
     npm start
     ```

6. Open your browser and navigate to `http://localhost:3000` to see the application in action.


### Authentication

- Users can sign up and log in using their email and password.
- JWT tokens are used to authenticate API requests.

### Chat

- Messages are sent in real-time using Socket.io.
- Chat history is saved in MongoDB and is accessible when users reconnect.

## Deployment

To deploy the application:

1. Set up a MongoDB database in a cloud service like MongoDB Atlas.
2. Deploy the server to a cloud service like Heroku, Vercel, or AWS.
3. Deploy the client to a static hosting service like Netlify or Vercel.
4. Update the environment variables with your production values.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```

