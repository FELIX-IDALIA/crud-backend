const User = require("../model/Users");

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

module.exports = deleteOne;

