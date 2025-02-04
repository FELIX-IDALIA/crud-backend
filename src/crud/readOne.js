const User = require("../model/Users");

const readOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ message: "success", user });

    } catch (error) {
        return res.status(500).json({ error: error.message });

    }

};

// Read by email
const readByEmail = async (req, res) => {
    try {
        // Extract email from query parameters
        const { email } = req.query;
        // Find user by email and return only name and email
        const user = await User.findOne({ email }).select("name email");

        if (!user) {
            res.status(404).json({ error: "User with this email does not exist" });
        }

            res.status(200).json({ message: "Success", user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { readByEmail, readOne };