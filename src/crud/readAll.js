const User = require("../model/Users");

const readAll = async (req, res) => {
   try {
        const users = await User.find();

        if (!users) {
          return res.status(404).json({ message: "No records found" });
        }
        return res.status(200).json({ message: "success", users });

   } catch (error) {
        return res.status(500).json({ error: error.message });
   }
};

module.exports = readAll;