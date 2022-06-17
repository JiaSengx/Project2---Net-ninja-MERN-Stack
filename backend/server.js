require('dotenv').config();
// import library
const express = require('express');
// import routes
const workoutRoutes = require('./routes/workout');

const app = express();

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

app.listen(process.env.PORT, () => {
  console.log('listen on', process.env.PORT);
});
