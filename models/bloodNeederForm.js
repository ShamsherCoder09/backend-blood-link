const {Schema,model} = require('mongoose')

const formSchema = new Schema({
    organization: {
        type: Schema.Types.ObjectId,
    },
    donerDetails:{
        type: Object,
        require: true
    }

});

const formModel = model(BloodNeederForm,formSchema);
module.exports = formModel;