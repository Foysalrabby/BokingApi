const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
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








app.get("/" ,(req,res)=>{
    res.send("hello");
})

app.listen(port, () =>{
    connected();
    console.log(`${port} is running`);

})