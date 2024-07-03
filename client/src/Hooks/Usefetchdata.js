import { useEffect, useState } from "react"
import axios from 'axios';
const useFetchdata=(url)=>{
 const[data,setdata]=useState([]);
 const[load,setload]=useState(false);
 const[error,seterror]=useState(false);

 useEffect(()=>{
    const fetchdata=async()=>{
        try{
       const res=await axios.get(url);
       setdata(res.data);


        }catch(error){
            seterror(error);
    
        }
        setload(false);

    }
    fetchdata();
   
 },[url]);

 const refetch=async()=>{
    try{
        const res=await axios.get(url);
        setdata(res.data);
    }catch(error){
     seterror(error);
    }
    setload(false);
 }
return {data,load,error,refetch}
}
export default useFetchdata;
