import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import incidentRoutes from "./routes/incidentRoutes.js";


dotenv.config();

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is running!");
});

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("Error connecting to database", err));


app.use("/incidents", incidentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})