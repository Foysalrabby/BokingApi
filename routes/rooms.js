import  express from "express";
import Room from "../api/Model/Room.js";
import { createRoom, deleteRoom, getallRoom, getidRoom, updateRoom } from "../api/controllers/room.js";
const router=express.Router();

//create rooms
router.post("/",createRoom);
//update
router.put("/:id",updateRoom);
//delete
router.delete("/:id",deleteRoom);
//getid
router.get("/:id",getidRoom);
//getall
router.get("/",getallRoom);

export default router;