const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const StudentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  totalMarks: {
    type: String,
    required: true,
  },
});
const Student = mongoose.model("STUDENT", StudentSchema);
module.exports = Student;
