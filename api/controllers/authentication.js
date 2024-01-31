import User from "../Model/User.js";

//create 
export const createUserAUTH = async(req,res,next) => {
    const authusers= new User(req.body);
try {
    const saveUser=await authusers.save();
    return res.status(200).send(saveUser);
   
} catch (error) {
   next(error);
    
} 
}
//update 