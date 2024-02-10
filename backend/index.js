
import express from 'express';
//import bodyParser from "body-parser";
const app = express();

import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import authHotels from './routes/hotels.js';
import authRooms from './routes/rooms.js';
import authUser from './routes/users.js';
import dotenv from 'dotenv' ;
import  cookieParser   from 'cookie-parser';
dotenv.config();
const port=5000;

//connect moongse

const connected = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }catch(error){
        throw(error);
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("disconnected");
});
mongoose.connection.on("connected",()=>{
    console.log("connected yes");
})



// const { MongoClient, ServerApiVersion } = require('mongodb');
// // console.log(process.env.DB_NAME,process.env.DB_PASSWORD);
// const uri =`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.lb2opmd.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     const db=await client.db("Booking_hotel");
//     const coll=db.collection("userdata");
//      console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//      //await client.close();
//   }
// }
// run().catch(console.dir);

//middleware
app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.json());
app.use("/auth",authRoute);
app.use("/hotels",authHotels);
app.use("/rooms",authRooms);
app.use("/users",authUser);

//error handling
app.use((err,req,res,next) => {
    const statuserr= err.status || 500;
    const staterrmeassa= err.message || "somethig is wrong";
return res.status(statuserr).json({
success:false,
status:statuserr,
message:staterrmeassa,
stack:err.stack

});

});







app.listen(port, () =>{
    connected();
    console.log(`${port} is running`);

})