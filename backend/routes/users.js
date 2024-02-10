import express from "express";
import User from "../api/Model/User.js";
import {  deletUser, getAlluser, getidUser, updatUser } from "../api/controllers/user.js";
import { VarifyAdmin, VarifyUser, Varifyctoken } from "../api/Untils/Varifytoken.js";
const router=express.Router();


//varify token and middleware to access other route

// router.get("/checkloginToken",Varifyctoken,(req,res,next)=>{
//     res.send("hey you are login");
// })
// //varify user
// router.get("/checkuser/:id",VarifyUser,(req,res,next)=>{
//     res.send(" you pass login and can delete your account");
// })
// //varify admin
// router.get("/checkAdmin/:id",VarifyAdmin,(req,res,next)=>{
//     res.send("you can delete all  account so you are admin");
// })
//create post
//router.post("/",createUser);//create

router.put("/:id",VarifyUser,updatUser); //update

router.delete("/:id",VarifyUser,deletUser);//delete

router.get("/:id",VarifyUser,getidUser);//getbyid

router.get("/",VarifyAdmin,getAlluser);//get all


































export default router;