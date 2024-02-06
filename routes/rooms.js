import  express from "express";
import Room from "../api/Model/Room.js";
const router=express.Router();

//create rooms
router.post("/",async(req,res,next) => { 
     const Roominfo=new Room(req.body);
    try {
          const saveRoom=await Roominfo.save();
          res.status(200).send(saveRoom);
        
    } catch (error) {
       next(error); 
    }

})
//update
router.put("/:id",async(req,res,next) =>{
    try {
        const UpdateRooms=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(202).send(UpdateRooms);
        
    } catch (error) {
        next(error);
    }
})


export default router;