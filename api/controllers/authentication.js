import User from "../Model/User.js";
import bcrypt from "bcryptjs";

//create registration 
export const createUserAUTH = async(req,res,next) => {
    
try {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt); 
    const authusers= new User({
        
       username:req.body.username,
       useremail:req.body.useremail,
       password:hash
    });
    await authusers.save();
    return res.status(200).send("user is create successfully");
   
} catch (error) {
   next(error);
    
} 
}
//update 


//delete


// getbyid

//getAll

