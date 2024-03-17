// routes/projectManager.js
const express = require('express');
const router = express.Router();
const userModelss = require('../models/user');

// Route to fetch customer details
router.get('/users', async (req, res) => {
  try {
    // Fetch customer details from the database
    const customers = await Customer.find({}, 'name url credentials');
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to assign a tester to a customer
router.put('/assign-tester/:userId', async (req, res) => {
    const { testerId } = req.body;
    const { userId } = req.params;
  
    try {
      // Update the tester assigned to the customer in the database
      const updatedCustomer = await userModel.findByIdAndUpdate(
        customerId,
        { tester: testerId, status: 'under triage' }, // Update status to 'under triage'
        { new: true }
      );
      
      res.status(200).json(updatedCustomer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
