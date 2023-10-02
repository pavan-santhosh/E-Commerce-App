import express from "express";
import dotenv from "dotenv"
dotenv.config();
import productRoutes from "./routes/productRoutes.js"
import connectDB from "./config/db.js";
import products from "./data/products.js"
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/',(req,res)=>{
    res.send("App is running...");
})

app.use("/api/products",productRoutes);

app.listen(port, () => {
    console.log(`Server is running in the PORT: ${port} successfully`);
})