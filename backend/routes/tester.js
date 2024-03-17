// routes/tester.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Route to fetch URL and credentials of customers assigned to the tester
router.get('/assigned-customers/:testerId', async (req, res) => {
  const { testerId } = req.params;

  try {
    // Find customers assigned to the tester
    const assignedCustomers = await Customer.find({ tester: testerId }, 'name url credentials');
    res.status(200).json(assignedCustomers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
