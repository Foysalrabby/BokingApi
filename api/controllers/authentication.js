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
//create Login


export const createusrlogin=async(req,res,next) =>{
try {
    
const usercheck= await User.findOne({username:req.body.username})
if(!usercheck){return res.status(404).send("Username is not found")}

const passwordcheck= await bcrypt.compareSync(req.body.password, usercheck.password) 
if(!passwordcheck){return res.status(404).send("password is not coorect")}

res.status(200).json(usercheck);

} catch (error) {
    next(error); 
}

}