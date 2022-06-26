require('dotenv').config();
// import library
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// import routes
const workoutRoutes = require('./routes/workout');

const app = express();
app.use(cors());

// Middleware
// Get req body
app.use(express.json());
// Log http request call and the type
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

app.get('/', (req, res) => {
  res.json({ msg: 'Default api route' });
});

const appStart = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log('listen on', process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
appStart();
