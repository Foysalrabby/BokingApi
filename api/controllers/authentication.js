import User from "../Model/User.js";

//create 
export const createUserAUTH = async(req,res,next) => {
    
try {
    const authusers= new User({
        
       username:req.body.username,
       useremail:req.body.useremail,
       password:req.body.password
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

