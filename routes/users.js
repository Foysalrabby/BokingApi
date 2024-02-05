import express from "express";
import User from "../api/Model/User.js";
import { createUser, deletUser, getAlluser, getidUser, updatUser } from "../api/controllers/user.js";
import { VarifyAdmin, VarifyUser, Varifyctoken } from "../api/Untils/Varifytoken.js";
const router=express.Router();


//varify token and middleware to access other route

router.get("/checkloginToken",Varifyctoken,(req,res,next)=>{
    res.send("hey you are login");
})
//varify user
router.get("/checkuser/:id",VarifyUser,(req,res,next)=>{
    res.send(" you pass login and can delete your account");
})
//varify admin
router.get("/checkAdmin/:id",VarifyAdmin,(req,res,next)=>{
    res.send("you can delete all  account so you are admin");
})
//create post
router.post("/",createUser);//create

router.put("/:id",updatUser); //update

router.delete("/:id",deletUser);//delete

router.get("/:id",getidUser);//getbyid

router.get("/",getAlluser);//get all


































export default router;