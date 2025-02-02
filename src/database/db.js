const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const password = encodeURIComponent(process.env.DB_PASSWD);

if (!process.env.DB_PASSWD) {
    console.log("Failed to load environment variables!");
    process.exit(1);
}

const MONGO_URI = `mongodb+srv://Idalia:${password}@practise0.h4clk.mongodb.net/TestingCrud?retryWrites=true&w=majority&appName=Practise0`;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully!");

    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1)
    }
    
};

module.exports = connectDB;