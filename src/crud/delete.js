const User = require("../model/Users");

// Delete all documents
const deleteMany = async (req, res) => {

    try {
        const result = await User.deleteMany({}); 

        if(!result) {
            res.status(404).json({ error: "No records found!" });
        }

        res.status(200).json({ message: "All users deleted", deletedCount: result.deletedCount });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Finds user by id then deletes
const deleteOne = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            res.status(404).json({ error: "User not found!"});
        }

        res.status(200).json({ message: "User deleted successfully", deletedUser});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {deleteMany, deleteOne};