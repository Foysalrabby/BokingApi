import express from "express";
const router = express.Router();
import Hotel from "../api/Model/hotel.js";

//create
router.post("/", async (req, res) => {
    const hotelInfo = new Hotel(req.body);
    try {
        const savedHotel = await hotelInfo.save();
        return res.status(200).send(savedHotel);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//update

//delete

//get

//all get
    

export default router;