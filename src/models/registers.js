const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      confirmpassword: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
      },
})

const Register = new mongoose.model("Register", patientSchema);

module.exports = Register;