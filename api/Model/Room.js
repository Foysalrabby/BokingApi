import mongoose from 'mongoose';

const Roomschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true 
    },
   
    describtion:{
        type:String,
        required:true 
    },
    maxpeople:{
        type:Number,
        required:true 
    },
    roomnum:[{number:Number,unavialabledate:{type:[Date]}}],
   
       
},
{timestamps:true});
export default mongoose.model("Rooms",Roomschema);