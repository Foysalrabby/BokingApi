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
export const getallHotel = async (req, res, next) => {
    try {
        // Destructure min, max, and collect the rest in other
        const { min, max, ...other } = { ...req.query };
        let limit = parseInt(other.limit, 10);

        // Remove limit from other to avoid any issues with mongoose query
        delete other.limit;

        // Convert string 'true'/'false' to boolean
        for (let key in other) {
            if (other[key] === 'true') {
                other[key] = true;
            } else if (other[key] === 'false') {
                other[key] = false;
            }
        }

        // Set a default limit if none provided or if limit is invalid
        if (isNaN(limit) || limit <= 0) {
            limit = 10; // Default limit
        }

        // Build query object for MongoDB
        const query = { ...other };

        // Optionally, add price range filtering if min and max are provided
        if (min !== undefined && max !== undefined) {
            query.chepestprice = { $gte: parseInt(min), $lte: parseInt(max) };
        }

        // Fetch hotels based on constructed query and limit
        const hotels = await Hotel.find(query).limit(limit);
        
        // Return JSON response with hotels
        return res.status(200).json(hotels);
    } catch (error) {
        // Pass error to the next middleware for proper error handling
        next(error);
    }
};
//to use fronentallhotel koyta show korbo headerpor
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
//getallhoteltype  Browse Types Propertie
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