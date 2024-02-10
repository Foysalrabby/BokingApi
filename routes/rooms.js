import  express from "express";
import Room from "../api/Model/Room.js";
import { createRoom, deleteRoom, getallRoom, getidRoom, updateRoom } from "../api/controllers/room.js";
import {VarifyAdmin} from '../api/Untils/Varifytoken.js';
const router=express.Router();

//create rooms
router.post("/:hotelid",VarifyAdmin,createRoom);
//update
router.put("/:id",VarifyAdmin,updateRoom);
//delete
router.delete("/:id/:hotelid",VarifyAdmin,deleteRoom);
//getid
router.get("/:id",getidRoom);
//getall
router.get("/",getallRoom);

export default router;