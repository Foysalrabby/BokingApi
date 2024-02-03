import express from "express";
import User from "../api/Model/User.js";
import { createUser, deletUser, getAlluser, getidUser, updatUser } from "../api/controllers/user.js";
import { Varifyctoken } from "../api/Untils/Varifytoken.js";
const router=express.Router();


//varify token and middleware to access other route

router.get("/checkloginToken",Varifyctoken,(req,res,next)=>{
    res.send("hey you are login");
})
//create post
router.post("/",createUser);//create

router.put("/:id",updatUser); //update

router.delete("/:id",deletUser);//delete

router.get("/:id",getidUser);//getbyid

router.get("/",getAlluser);//get all


































export default router;