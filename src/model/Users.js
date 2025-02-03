const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "name is required"]}, // custom error message
    username: {type: String, required: [true, "username is required"]}, // custom error message
    email: {type: String, required: [true, "email is required"]},   // custom error message
    age: {type: Number, required: true},
    gender: String,
    country: String,
    city: String
    

}, { timestamps: true }
);

// create a compound index for all unique fields
UserSchema.index({ username: 1}, { unique: true });
UserSchema.index({ email: 1}, { unique: true });

const User = mongoose.model("Users", UserSchema);

module.exports = User;