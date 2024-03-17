// server.js
const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const db = require('./config/db');

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
const signupRouter = require('./routes/signup');
app.use('/api/signup', signupRouter);

const loginRouter = require('./routes/login');
app.use('/api/login', loginRouter);

const userRoutes = require('./routes/user');
app.use('/api/update ', userRoutes);
app.use('/api/status ', userRoutes);
// Start server
const projectRoutes = require('./routes/projectManager');
app.use('/api/users ', projectRoutes);
app.use('/api/assign-tester/:userId', projectRoutes);

const testerRoutes = require('./routes/tester');
app.use('/api/users ', testerRoutes);
app.use('/api/assign-tester/:userId', testerRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
