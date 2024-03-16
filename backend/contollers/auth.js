const userModel = require('../models/user_details');
const urlModel = require('../models/url');
const testerModel = require('../models/tester');
const proModel = require('../models/productmanager');
const { hashPassword, comparePassword } = require('../helpers/authhelper.js');

const bodyParser = require('body-parser');

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.send({ message: 'Name required' });
        }
        if (!email) {
            return res.send({ message: 'Email required' });
        }
        if (!password) {
            return res.send({ message: 'Password required' });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'User already registered'
            });
        }

        const hashedPassword = await hashPassword(password);
        const user = await new userModel({ name, email, password: hashedPassword }).save();
        return res.status(201).send({
            success: true,
            message: "User registered",
            user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error
        });
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "User not found"
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: "Incorrect password"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Login successful"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Login Failed',
            error
        });
    }
}
const getController = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed as a route parameter
        const user = await userModel.findById(userId); // Querying by ID

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const prologinController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            });
        }
        const user = await proModel.findOne({ email });
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "User not found"
            });
        }
       
        return res.status(200).json({
            success: true,
            message: "Login successful"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Login Failed',
            error
        });
    }
}

const testloginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            });
        }
        const user = await testerModel.findOne({ email });
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "User not found"
            });
        }
       
        return res.status(200).json({
            success: true,
            message: "Login successful"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'Login Failed',
            error
        });
    }
}

const urlController = async (req, res) => {
    try {
        const {  url, credentials } = req.body;

        const newURL = new urlModel({
         
            url,
            credentials
        });

        await newURL.save();

        return res.status(201).json({
            success: true,
            message: 'URL saved successfully'
        });
    } catch (error) {
        console.error('Error saving URL:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const urlgetController = async (req, res) => {
    try {
        const urls = await urlModel.find();

        return res.status(200).json({
            success: true,
            message: 'URLs fetched successfully',
            data: urls
        });
    } catch (error) {
        console.error('Error fetching URLs:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

const testerController = async (req, res) => {
    try {
        const { id } = req.params;
        const { testerEmail, newStatus } = req.body;

        const url = await urlModel.findById(id);

        if (!url) {
            return res.status(404).json({ message: 'Document not found' });
        }

        url.email = testerEmail; // Fix: Assigning values to url properties
        url.status = newStatus;

        await url.save();

        res.status(200).json({ message: 'Document updated successfully', url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    registerController,
    loginController,
    urlController,
    urlgetController,
    testerController,
    prologinController,
    testloginController,
    getController
};
