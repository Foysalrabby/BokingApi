import express from "express";
import User from "../api/Model/User.js";
import { createUserAUTH } from "../api/controllers/authentication.js";
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
router.post("/",createUserAUTH);
//update
router.put("/:id",async(req,res,next) => {
    
    try{
       const updateUser=await User.findByIdAndUpdate(req.params.id,{ $set: req.body},{new:true});
       return res.status(200).send(updateUser);


    }catch(error){
        next(error);
    }

})

//delete
router.delete("/:id",async(req,res,next) => {
    
    try{
      await User.findByIdAndDelete(req.params.id);
       return res.status(200).send("delete success");


    }catch(error){
        next(error);
    }

})


//get 



//get all

export default router;