import { Jwt } from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import User from "../models/userModel";

//Protect Routes
const protect = asyncHandler(async(req, res, next) => {
    let token;
    //Read the JWT from the cookie
    token = req.cookies.jwt;
    if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            nect();
        } catch(error){
            console.log(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

//Admin Middleware
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();
    } else{
        res.status(401);
        throw new Error('Not authorized as admin');
    }
};

export {protect, admin};