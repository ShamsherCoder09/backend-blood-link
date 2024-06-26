const User = require('../models/userSchema')
const availableBlood = require('../models/availableSchema')

module.exports.getOrganizations = async function(req,res){
    const {city,state} = req.body;
    const organizations = await User.find({
        city: city,
        role: 'Organization',
    })
    if(organizations.length > 0){
        return res.status(200).send(organizations)
    }
    else{
        res.status(400).send('Cannot fetch organizations')
    }
}

module.exports.updateAvailable = async function(req, res) {
    try {
        const data = req.body
        const updatedData = await availableBlood.findOneAndUpdate({organizationName: data?.organizationName}, data, { 
            new: true, 
            upsert: true 
        })

        res.status(200).json({ message: 'Availability updated successfully', data: updatedData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating availability');
    }
}
module.exports.getAvailableBlood = async function(req, res) {
    try {
        const organizationName = req?.body?.data;
        const availability = await availableBlood.findOne({ organizationName });

        if (!availability) {
            return res.status(404).json({ message: 'Availability data not found for the organization' });
        }
        res.status(200).json({ message: 'Availability data fetched successfully', data: availability });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching availability data');
    }
}