const User = require('../models/userSchema')
module.exports.addUser = async function(req, res) {
    try {
      const { fullName, email, aadhar, password, contact, role, ...otherData } = req.body;
      const existingUser = await User.findOne({ $or: [{ email }, { aadhar }, { contact }] });

      if (existingUser) {
          return res.status(400).send('User with same email/Aadhar/contact already exists');
      }
      const newUser = new User({
        fullName,
        email,
        aadhar,
        password, 
        contact,
        role,
        ...otherData, 
      });
  
      const savedUser = await newUser.save();
  
      res.status(201).send({ message: 'User created successfully!', userId: savedUser._id });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating user');
    }
  }
  
  