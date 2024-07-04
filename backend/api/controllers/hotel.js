import { response } from "express";
import Hotel from "../Model/Hotel.js";

// create hotels
export const createHotel= async(req,res,next)=>{
    const hotelInfo = new Hotel(req.body);
     try {
         const savedHotel = await hotelInfo.save();
         return res.status(200).send(savedHotel);
     } catch (error) {
         next(error);
     }

}
// update hotels
export const updateHotel= async(req,res,next)=>{
    
    try {

        const Updatehotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(200).send(Updatehotel);
        
    } catch (error) {
        next(error);
        
    }

}

// delete hotels
export const deletHotel= async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        return res.status(200).send("delete succeful");
        
    } catch (error) {
        next(error);
        
    }

}
//getid hotels
export const getidHotel= async(req,res,next)=>{
    try {
        const hotels = await Hotel.findById(req.params.id);
         return res.status(200).json(hotels);
         
     } catch (error) {
        next(error);
         
     }

}
//get allhotels
export const getallHotel= async(req,res,next)=>{
    try {
        const hotels=  await Hotel.find();
          return res.status(200).json(hotels);
      } catch (error) {
           //console.log(error);
          // return res.status(500).send(error);
          next(error);
          
      }

}
//to use fronentallhotel
export  const getallhotelcountbycity=async(req,res,next)=>{
    const cities=req.query.cities.split(",")
    try{
        const list=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})  //city 1st api
        }))
        res.status(200).json(list)
    }
    catch(error){
        next(error)
    }

}
//getallhoteltype 
export const getallhoteltype= async(req,res,next)=>{
    try{
        //hotel,apartment,villa,resorts,cabin api type=hotel use 
        const hotelcount=await Hotel.countDocuments({type:"hotel"});
        const apartmentcount=await Hotel.countDocuments({type:"apartment"});
        const villacount=await Hotel.countDocuments({type:"villa"});
        const resortscount=await Hotel.countDocuments({type:"resorts"});
        const cabincount=await Hotel.countDocuments({type:"cabin"});
        res.status(200).json([
            {type:"hotel",count:hotelcount},
            {type:"apartment",count:apartmentcount}, 
            {type:"villa",count:villacount}, 
            {type:"resorts",count:resortscount}, 
            {type:"cabin",count:cabincount},
        ]);

    }catch(error)
    {
     next(error);
    }

}