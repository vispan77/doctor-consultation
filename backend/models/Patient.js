const { parse } = require("dotenv");
const mongoose = require("mongoose");
const { computeAgeFromDob } = require("../utils/date");

const emergencyContactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    relationShip: {type: String, required: true},

}, {_id: false});

const medicalHistortySchem = new mongoose.Schema({
    allergies: {type: String, default: ""},
    currentMedications: {type: String, default: ""},
    chronicConditions: {type: String, default: ""}
    
}, {_id: false})


const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    googleId: {type: String, unique: true, parse: true},
    profileImage: {type: String, default: ""},

    phone: {type: String},
    dob: {type: Date},
    age: {type: Number},
    gender: {type: String, enum: ["male", "female", "other"]},
    bloodGroup: {type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },


    isVerified: {type: Boolean, default: false}


}, {timestamps: true});


//pre middleware
patientSchema.pre("save", function(next){
    if(this.dob && this.isModified("dob")){
        this.age = computeAgeFromDob(this.dob);
    }

    next();
})







module.exports = mongoose.model("Patient", patientSchema);