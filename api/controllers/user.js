import User from "../Model/User.js";

//create user
export const createUser= async(req,res,next) => {
    const UserlInfo = new User(req.body);
     try {
         const savedUser = await UserlInfo.save();
         return res.status(200).send(savedUser);
     } catch (error) {
         next(error);
     }
}
//Update user
export const updatUser= async(req,res,next)=>{
    try {
        const UpdateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(200).send(UpdateUser);     
    } catch (error) {
        next(error);      
    }
}
//delete User
export const deletUser= async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send("delete succeful");    
    } catch (error) {
        next(error);      
    }
}
//getbyid user
export const getidUser= async(req,res,next)=>{
    try {
        const hotels = await User.findById(req.params.id);
         return res.status(200).json(hotels);        
     } catch (error) {
        next(error);      
     }
}
//getall 
export const getAlluser=async(req,res,next) =>{
    try {
        const hotels = await User.find(req.params.id);
         return res.status(200).json(hotels); 
    } catch (error) {
        next(error);  
    }
}