const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all data for the table
router.get('/data', async (req, res) => {
  try {
    const data = await User.find(); // Fetch all records
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;