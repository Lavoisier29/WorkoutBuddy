const express = require('express');
const {
    getWorkout,
    updateWorkout,
    deleteWorkout,
    getWorkouts,
    createWorkout
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router;