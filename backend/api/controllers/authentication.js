import User from "../Model/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../Untils/error.js";
import jwt from "jsonwebtoken";

//create registration 
export const createUserAUTH = async(req,res,next) => {
    
try {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);  //bcryptjs
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
     //bcryptjs
const usercheck= await User.findOne({username:req.body.username})
if(!usercheck){return res.status(404).send("Username is not found")}

const passwordcheck= await bcrypt.compareSync(req.body.password, usercheck.password) 
if(!passwordcheck){return next(createError("404","password is not coorect")) }

//jwt cookies and token jsonwebtoken

const {username,password, ...otheedeails}=usercheck._doc;
// res.status(200).json({...otheedeails});
 //jwtwebtoken
 
const token = jwt.sign({ id:usercheck._id,isAdmin:usercheck.isAdmin}, process.env.JW_TOKEN);
res.cookie("access_token",token,{expiresIn:'7d',httpOnly:true}).status(200).json({data:{...otheedeails,username}});

// res.cookie( "access_token",token,{
//     httpOnly:true
// }).
// status(200).json({
  
//    "error":"authentication failed",
//    "data" :{...otheedeails}
// })
} catch (error) {
    next(error); 
}

}