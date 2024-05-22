const BloodNeederForm = require('../models/bloodNeederForm')
module.exports.addFormData = async function  (req,res) {
    const {organizationId,userData} = req.body;
    const {_id,createdAt,updatedAt,__v,...rest} = userData;
    const create = await BloodNeederForm.create({organizationId: organizationId,donerDetails: rest});
    if(create){
        return res.status(200).send({message: 'Form SuccesFully Submitted'});
    }
}