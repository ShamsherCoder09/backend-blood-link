const User = require('../models/userSchema')

module.exports.getOrganizations = async function(req,res){
    const {city,state} = req.body;
    const organizations = await User.find({
        city: city,
        state: state,
        role: 'Organization',
    })
    if(organizations.length > 0){
        return res.status(200).send(organizations)
    }
    else{
        res.status(400).send('Cannot fetch organizations')
    }
}