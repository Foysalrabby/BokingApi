import mongoose from "mongoose";
import Room from "../Model/Room.js";


// create rooms
export const createRoom= async(req,res,next) => {
    const Roominfo=new Room(req.body);
    try {
          const saveRoom=await Roominfo.save();
          res.status(200).send(saveRoom);
        
    } catch (error) {
       next(error); 
    }
} 
//update rooms
export const updateRoom= async(req,res,next) => {
    
    try {
        const UpdateRooms=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(202).send(UpdateRooms);
        
    } catch (error) {
        next(error);
    }
} 
// delete rooms
export const deleteRoom= async(req,res,next) => {
    
    try {
          await Room.findByIdAndDelete(req.params.id);
          res.status(200).json("delete room successfully");
        
    } catch (error) {
       next(error); 
    }
} 
//getbyid room
export const getidRoom= async(req,res,next) => {
    
    try {
          const roomInfo=await Room.findById(req.params.id) ;
          res.status(200).send(roomInfo);
        
    } catch (error) {
       next(error); 
    }
} 
//get allrooms
export const getallRoom= async(req,res,next) => {
    
    try {
        const roominfo= await Room.find();
          res.status(200).send(roominfo);
        
    } catch (error) {
       next(error); 
    }
} 


