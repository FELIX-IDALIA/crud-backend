const User = require("../model/Users");

// Find all users
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

// Find all users whose age is greater than 10
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

// Find a user by id
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
 
 // Find one user by email
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
 

module.exports = { readAll, readUsersAboveTen, readByEmail, readOne };