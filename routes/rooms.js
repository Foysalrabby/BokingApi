import  express from "express";


const router=express.Router();
router.get("/",(req,res)=>{
res.send("hello this is room method");
})
export default router;