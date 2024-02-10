export const createError=(status,message)=>{
    const errr=new Error();
    errr.status=status;
    errr.message=message;
    return errr;
}