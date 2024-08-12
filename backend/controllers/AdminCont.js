const PatientModel = require('../models/patient.js');

const getPatient = async (req, res) => {
  try {
    const patients = await PatientModel.find();
    res.status(200).json({ patients });
  } catch (error) {
    console.error('Error in getPatient:', error);
    res.status(500).json({
      success: false,
      message: 'Server internal error',
    });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;

    const checkAdmin = await PatientModel.findById();
    if(checkAdmin.role =="admin"){
        return res.status(409).json({message:"You can not delete yourselfe because you are admin"});
    }


    const patient = await PatientModel.findByIdAndDelete(patientId);
    if (!patient) {
      return res.status(404).json({
        success: false,
        message: 'Patient not found',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Patient deleted successfully',
      patient,
    });
  } catch (error) {
    console.error('Error in deletePatient:', error);
    res.status(500).json({
      success: false,
      message: 'Server internal error',
    });
  }
};

module.exports = { getPatient, deletePatient };
