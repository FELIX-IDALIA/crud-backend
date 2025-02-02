const User = require("../model/Users");

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

module.exports = updatePut;