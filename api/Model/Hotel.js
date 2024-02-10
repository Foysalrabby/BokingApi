import mongoose from 'mongoose';
const Hotelschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true 
    },
   
    city:{
        type:String,
        required:true 
    },
    address:{
        type:String,
        required:true 
    },
    distance:{
        type:String,
        required:true 
    },
    title:{
        type:String,
        required:true 
    },
    photo:{
        type:[String],
        
    },
    describtion:{
        type:String,
        required:true 
    },
    rating:{
        type:Number,
        
        min:0,
        max:5
    },
    room:{
        type:[String],
       
    }, 
    chepestprice:{
        type:String,
      
    }, 
    fetures:{
        type:Boolean,
       default:false
    },
})
export default mongoose.model("Hotel",Hotelschema);