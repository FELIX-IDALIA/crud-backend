const User = require("../model/Users");

const create = async (req, res) => {
    
    try {
        const user = new User(req.body);

        const savedUser = await user.save();
        console.log("Saved data is:", savedUser);
        return res.status(201).json({ message: "User created successfully!"});

    } catch (error) {
        if (error.name === "ValidationError") {
            // Extract validation error message
            const field = Object.keys(error.errors)[0]; // Get the field name (e.g., "username")
            const message = error.errors[field].message; // Get the custom message
            return res.status(400).json({ "Validation error": message});
        } 

        if (error.code === 11000) { // MongoDB duplicate key error
            const field = Object.keys(error.keyPattern)[0]; // Get the field causing the error
            return res.status(400).json({ error: `${field} already exists` });
        }
        
        return res.status(500).json({ "Unknown error": error});
    
 }
};

module.exports = create;