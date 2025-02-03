const User = require("../model/Users");

// Finds all users
const readAll = async (req, res) => {
   try {
        const users = await User.find();

        if (!users) {
          return res.status(404).json({ error: "No records found" });
        }
        return res.status(200).json({ message: "success", users });

   } catch (error) {
        return res.status(500).json({ error: error.message });
   }
};

// Finds users whose age is greater than 10
const readUsersAboveTen = async (req, res) => {
     try {
          const users = await User.find({ age: { $gt: 10 }});
          //console.log(users.length);

          if (users.length === 0) {
               return res.status(404).json({ error: "No records found" });
          }

          res.status(200).json({ message: "Success", users });
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};

module.exports = { readAll, readUsersAboveTen };