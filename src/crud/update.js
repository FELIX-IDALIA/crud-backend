const User = require("../model/Users");

// Check if username or email already exists in another user's document
const checkUniqueFields = async (req, id) => {
    try {
        const { username, email } = req.body;

        const existingUser = await User.findOne({
            $or: [{ username}, { email }],
            _id: { $ne: id } // Exclude current user
        });

        if (existingUser) {
            return { error: "Username or Email already exists. Please choose a diffferent one"};
        }

        return null; // No duplicate found

    } catch (error) {
        return { error: error.message }; // Return error as an object instead of sending response directly
    }
};

// Finds user by id and update (PUT)
const updatePut = async (req, res) => {
    try {
        // Call checkUniqueFields and wait for result
        const uniqueCheckResult = await checkUniqueFields(req, req.params.id);

        if (uniqueCheckResult) {
            return res.status(400).json(uniqueCheckResult);
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedUser) {
            res.status(404).json({ error: "User not found "});
        }
        res.status(200).json({ message: "User record updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

// Find user by id and update (PATCH)
const updatePatch = async (req, res) => {
    try {
        // Call checkUniqueFields and wait for result
        const uniqueCheckResult = await checkUniqueFields(req, req.params.id);

        if (uniqueCheckResult) {
            return res.status(400).json(uniqueCheckResult);
        }
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedUser) {
            res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User records updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { updatePut, updatePatch} ;