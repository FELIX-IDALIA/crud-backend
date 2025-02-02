const User = require("../model/Users");

const create = async (req, res) => {
    
    try {
        const user = new User(req.body);

        const savedUser = await user.save();
        console.log("Saved data is:", savedUser);
        return res.status(201).json({ message: "User created successfully!"});

    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Failed to create user!"});
    }
};

module.exports = create;