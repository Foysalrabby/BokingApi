import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;


const Userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    useremail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
   
    isAdmin:{
        type:Boolean,
       default:false
    },

  },{timestamps:true});

  export default mongoose.model("Users",Userschema);