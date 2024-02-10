import Hotel from "../Model/Hotel.js";
import Room from "../Model/Room.js";

// create rooms
export const createRoom= async(req,res,next) => {
    const Roominfo=new Room(req.body);
    const hotelId=req.params.hotelid;
 
    try {
          const saveRoom=await Roominfo.save();
          try {
            await Hotel.findByIdAndUpdate(hotelId,{$push :{room: saveRoom._id}});
           //hotel id dibo hotle createhotel controller create hotel.js  then diffrent room
           // set auto id of room j hotel id dibo oi khane id set hbe
           } catch (error) {
            next(error);
           }

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
    const hotelId=req.params.hotelid;
    try {
          await Room.findByIdAndDelete(req.params.id);
          try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull :req.params.id});
           //hotel id dibo hotle createhotel controller create hotel.js  then diffrent room
           // set id ta delete hobe and hotel room number faka hbe 
           } catch (error) {
            next(error);
           }

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


