// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to update user data and set status to "Under Review"
router.put('/update', async (req, res) => {
  try {
    const { username, url, credentials } = req.body;
    // Update user data
    await User.updateOne({ username }, { url, credentials, status: 'Under Review' });
    res.status(200).json({ message: 'Data updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to fetch user status
router.get('/status', async (req, res) => {
  try {
    const userData = await User.find({}, 'url credentials status');
    res.status(200).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
