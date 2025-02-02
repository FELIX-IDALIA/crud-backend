const express = require("express");
const cors = require("cors");
const connectDB = require("./src/database/db");
const useRoutes = require("./src/route/routes");

const app = express();

// Middleware 
app.use(express.json());
app.use(cors());
app.use("/api", useRoutes);

app.get("/", (req, res) => {
    res.send("Server is running...");
});


const startServer = async () => {
   try {
        const PORT = 3000;
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server is running on port:", PORT);
        });

   } catch (error) {
    console.error("Failed to start server!");
    process.exit(1);

   }

};

startServer();