import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import Users from "./models/userModel.js";
import Products from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();


const importData = async () => {
    try{
        console.log("therla")
        await Order.deleteMany();
        await Users.deleteMany();
        await Products.deleteMany();

        const createdUsers = await Users.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product)=>{
            return {...product,user: adminUser};
        });

        await Products.insertMany(sampleProducts); 

        console.log('Data Imported!'.green.inverse);
        process.exit();
    }catch(err){
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try{
        await Order.deleteMany();
        await Users.deleteMany();
        await Products.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit();
    }catch(err){
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData();
} else {
    importData();
}