//create
export const Createhotel=async(req, res,next)=>{
    const hotelInfo = new Hotel(req.body);
    try {
        const savedHotel = await hotelInfo.save();
        return res.status(200).send(savedHotel);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
//