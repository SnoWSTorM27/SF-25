const {Schema, model, Types} = require("mongoose");

const schema = new Schema ({
    name:{type: String},
    selectedDate:{type: Date},
    email:{type: String, required: true, unique: true},
    phone:{type:Number},
    serialPass:{type:Number, unique: true},
    selectedDatePass:{type: Date},
    provide:{type: String},
    idPassOffice:{type:Number},
    idDrivingLicense:{type:Number, unique: true},
    selectedDateDrivingLicence:{type: Date},
    password:{type: String, required: true},
    links: [{type: Types.ObjectId, ref: "Link" }]
});
module.exports = model ("User",schema);