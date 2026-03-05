const Patient = require("../models/Patient");

//controller for getting patient profile by id
const patientProfile = async (req, res) => {
    const patient = await Patient.findById(req.user._id).select("-password -googleId");
    res.ok(patient, "Patient Profile is Feteched")
}



//controller for updating patient profile by id
const updatePatientprofile = async (req, res) => {
    try {
        const update = { ...req.body };

        if (updated.dob) {
            updated.age = computeAgeFromDob(updated.dob)
        }
        
        delete update.password;
        update.isVerified = true;  //mark profile verified on update 

        const patient = await Patient.findByIdAndUpdate(req.user._id, update, { new: true }).select("-passowrd -googleId");

        res.ok(patient, "Patient Profile Updated");

    } catch (error) {
        res.serverError("Patient updated failed", [error.message]);
    }
};

module.exports = {
    patientProfile,
    updatePatientprofile
}