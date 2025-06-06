# Create the root project folder
mkdir login-system && cd login-system

# -------------------------------
# FRONTEND SETUP (React.js)
# -------------------------------
npx create-react-app frontend
cd frontend

# Optional: Install Axios and React Router DOM
npm install axios react-router-dom

# Go back to root
cd ..

# -------------------------------
# BACKEND SETUP (Node.js + Express)
# -------------------------------
mkdir backend && cd backend
npm init -y

# Install required backend dependencies
npm install express mongoose dotenv cors bcryptjs jsonwebtoken multer

# Create folders and main files
mkdir controllers models routes middlewares uploads
touch index.js .env

# Create Git ignore
echo "node_modules
.env
uploads
/frontend/node_modules
/frontend/build
" > .gitignore

# Sample .env file (you will need to fill this)
echo "PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
" > .env

# Go back to root
cd ..

# -------------------------------
# GIT INIT
# -------------------------------
git init
echo "# Login System Project" > README.md
git add .
git commit -m "Initial project setup with React and Node.js"
![Screenshot 2025-06-07 012701](https://github.com/user-attachments/assets/8161b7bc-300e-4633-afad-427d4f76382b)

![Screenshot 2025-06-07 012811](https://github.com/user-attachments/assets/ac9318dc-d308-4b5f-a3ef-786668a3fd4d)

