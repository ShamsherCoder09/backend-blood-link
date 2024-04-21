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
      res.status(201).send({ message: 'User created successfully!', user: savedUser });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating user');
    }
  }

module.exports.loginUser = async function(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
          return res.status(401).json({ message: 'Invalid password' });
      }
        res.status(200).json({ message: 'Login successful' , user});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in user' });
    }
}
