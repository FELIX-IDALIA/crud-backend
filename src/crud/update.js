const User = require("../model/Users");
// Finds user by id and update (PUT)
const updatePut = async (req, res) => {
    try {
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