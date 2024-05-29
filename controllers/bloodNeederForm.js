const BloodNeederForm = require('../models/bloodNeederForm')
module.exports.addFormData = async function  (req,res) {
    const {organizationId,userData} = req.body;
    const {_id,createdAt,updatedAt,__v,...rest} = userData;
    const create = await BloodNeederForm.create({organizationId: organizationId,donerDetails: rest});
    if(create){
        return res.status(200).send({message: 'Form SuccesFully Submitted'});
    }
}

module.exports.getAllNeederForms = async function (req, res) {
    try {
        const neederForms = await BloodNeederForm.find({});
        if (neederForms) {
            return res.status(200).send(neederForms);
        } else {
            return res.status(404).send({ message: 'No forms found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'An error occurred while retrieving the forms' });
    }
};