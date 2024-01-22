import express from "express";
const router = express.Router();
import Hotel from "../api/Model/hotel.js";
import { createError } from "../api/Untils/error.js";

//create
router.post("/", async (req, res) => {
    const hotelInfo = new Hotel(req.body);
    try {
        const savedHotel = await hotelInfo.save();
        return res.status(200).send(savedHotel);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update

router.put("/:id",async(req,res) => {
    try {

        const Updatehotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(200).send(Updatehotel);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
        
    }

})

//delete
router.delete("/:id",async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        return res.status(200).send("delete succeful");
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
        
    }

});

//get
router.get("/:id", async(req,res) => {
    try {
       const hotels = await Hotel.findById(req.params.id);
        return res.status(200).json(hotels);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
        
    }

});

//all get

router.get("/",async (req,res,next) => { 
        
     
    try {
      const hotels=  await Hotel.find();
        return res.status(200).json(hotels);
    } catch (error) {
         //console.log(error);
        // return res.status(500).send(error);
        next(error);
        
    }

})

    

export default router;