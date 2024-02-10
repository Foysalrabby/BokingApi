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