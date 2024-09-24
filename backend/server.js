require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

