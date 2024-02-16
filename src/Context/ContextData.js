
import React,{createContext,useEffect,useState} from "react";
import axios from 'axios';



export const Store=createContext();

const ContextApi=(props)=>{
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchdata =async()=>{
      try{
   
         const response = await axios.get('https://tourism-nzji.onrender.com/api/tour');
        // const response = await axios.get('https://majarproject.onrender.com/api/tour');

        setData(response.data);
      }
      catch(err){
        console.log("error in fetch",err)
      }
    }
    fetchdata();

  },[])






    return(
        <>
        <Store.Provider value={[data]}>
           {props.children}

        </Store.Provider>
        </>
    )
}

export default ContextApi


