import express from "express";
import User from "../api/Model/User.js";
import { createUserAUTH, createusrlogin } from "../api/controllers/authentication.js";
const router=express.Router();
//create post
// router.post("/",async(req,res,next) => {
//     const authusers= new User(req.body);
//     try{
//        const saveUser=await authusers.save();
//        return res.status(200).send(saveUser);


//     }catch(error){
//         next(error);
//     }

// })  //before import createAuthuser
router.post("/register",createUserAUTH);
router.post("/login",createusrlogin);

export default router;