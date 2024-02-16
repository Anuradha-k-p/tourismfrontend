import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../Context/ContextData';
import "./Navbar.css"

const Offersdynamic = () => {
    const [received] = useContext(Store);
    const { id } = useParams();
    const id2 = parseInt(id);


    const currentIndex = received.findIndex((item) => item.id === id2);
    const nextItems = received.slice(currentIndex + 1, currentIndex + 5);
    




   
    
    return(
        <>
        <div className='fx'>
            

          

        { received.filter((item)=>item.id===id2).map((item,index)=>{
                return(
                    <>
                    <div key={index}>

                   
                    <h1>{item.Title}</h1>
                    <p>{item.Description}</p>
                    </div>
                    

                    </>

                     )})
            }
         
         <div className='dynamiccon'>
         {nextItems.map((item, index) => {
                    return (
                        <div className="shortcon" key={index}>
                           
                                <img
                                    src={item.image}
                                    alt="not found"
                                    height="250px"
                                    width="390px"
                                    id="boximg"
                                />
                                <div id="Description2">
                                    <p>{item.Title}</p>
                                    {/* <p>{item.Description.slice(0,110)+"..."}</p> */}
                                </div>
                          
                        </div>
                    );
                })}
         </div>


            




        </div>

        
        </>
    )
}


export default Offersdynamic;
