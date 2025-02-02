const User = require("../model/Users");

const readOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ error: error.message });

    }

};

module.exports = readOne;