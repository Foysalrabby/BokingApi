import express from "express";


const router = express.Router();
router.get("/",(req,res)=>{
    res.send("helllo i am auth method");
});

export default router;