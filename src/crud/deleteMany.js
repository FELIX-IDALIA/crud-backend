const User = require("../model/Users");

const deleteMany = async (req, res) => {

    try {
        const result = await User.deleteMany({}); // Delete documents

        if(!result) {
            res.status(404).json({ error: "No records found!" });
        }

        res.status(200).json({ message: "All users deleted", deletedCount: result.deletedCount });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteMany;