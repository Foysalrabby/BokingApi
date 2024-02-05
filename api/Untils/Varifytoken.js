import jwt  from "jsonwebtoken";
import { createError } from "./error.js";

export const Varifyctoken=(req,res,next) =>{
    const token=req.cookies.access_token;
    if(!token){return next(createError("401","You are not authenticated"))}

    jwt.verify(token,process.env.JW_TOKEN,(err,userdata)=>{
       if(err){return next(createError("403","token is not valid"))}
        req.user=userdata;
       next()
    });
}
//uservarify to access with admin
export const VarifyUser=(req,res,next)=>{
    Varifyctoken(req,res,()=>{
        if(req.user.id == req.params.id || req.user.isAdmin){
            next()  
         }
        else{
           return next(createError("you are not authenticate"))
        }
    })  
}
//varify admin
 export const VarifyAdmin=(req,res,next)=>{
    Varifyctoken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError("you are not admin"))  
        }
    })
 }