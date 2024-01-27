import express from "express";
const router = express.Router();
import Hotel from "../api/Model/hotel.js";
import { createError } from "../api/Untils/error.js";
import { createHotel, deletHotel, getallHotel, getidHotel, updateHotel } from "../api/controllers/hotel.js";



//create
//  router.post("/", async (req, res,next) => {
//      const hotelInfo = new Hotel(req.body);
//      try {
//          const savedHotel = await hotelInfo.save();
//          return res.status(200).send(savedHotel);
//      } catch (error) {
//          next(error);
//           }
//  });

router.post("/",createHotel);
//update

router.put("/:id",updateHotel);

//delete
router.delete("/:id",deletHotel);

//get
router.get("/:id",getidHotel );

//all get

router.get("/",getallHotel);

    

export default router;