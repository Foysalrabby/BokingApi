import express from "express";
const router = express.Router();
import { createError } from "../api/Untils/error.js";
import { createHotel, deletHotel, getallHotel, getallhotelcountbycity, getidHotel, updateHotel } from "../api/controllers/hotel.js";
import { VarifyAdmin } from "../api/Untils/Varifytoken.js";



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

router.post("/",VarifyAdmin,createHotel);
//update

router.put("/:id",VarifyAdmin,updateHotel);

//delete
router.delete("/:id",VarifyAdmin,deletHotel);

//get
router.get("/find/:id",getidHotel );

//all get

router.get("/",getallHotel);

router.get("/countbycityname",getallhotelcountbycity);
router.get("/countbytype",getallHotel);
    

export default router;