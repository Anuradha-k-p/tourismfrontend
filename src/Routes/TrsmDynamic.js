import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../Context/ContextData';
import { BsTrainLightrailFrontFill } from "react-icons/bs";
import { IoAirplane } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import "./Navbar.css"



const TrsmDynamic = () => {
    const [received] = useContext(Store);
    console.log(received)
    const { id } = useParams();
    const id2 = parseInt(id);


    const currentIndex = received.findIndex((item) => item.id === id2);
    const nextItems = received.slice(currentIndex + 1, currentIndex + 5);

    const nextItems2 = received.slice(currentIndex + 5, currentIndex + 9);

    

  

    return(
        <>
        <div className='fx'>

            { received.filter((item)=>item.id===id2).map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                    
                    <h1>{item.Title}</h1>
                    <p>{item.des}</p>
                    <b className='clr'>History</b><br/>
                    <p>{item.history}</p>
                    <b className='clr'>Fairs & Festivals</b><br/>
                    <p>{item.fair}</p>
                    <b className='clr'>Best Time to Visit</b><br/>
                    <p>{item.time}</p>
                    <b className='clr'>How to Reach :-</b><br/><br/>
                    <b className='clr'> <IoAirplane />   BY AIR - </b><p>{item.air}</p>
                    <b className='clr'> <BsTrainLightrailFrontFill />   BY RAIL - </b><p>{item.rail}</p>
                    <b className='clr'> <FaBusAlt />   BY ROAD - </b><p>{item.road}</p>
                    <br/>
                    <b className='clr'>Tourist Attractions</b>
                    <p>{item.attraction}</p>

                    <br/>



                    <h2>Things To See {item.Title}</h2>
                    
                    </div>
                    </>

                     )})
            }

           
            <div className='dynamiccon'>
         {nextItems.map((item, index) => {
                    return (
                        <div className="shortcon" key={index}>
                             {/* <h2>Things To See {item.Title}</h2> */}
                           
                                <img
                                    src={item.image}
                                    alt="not found"
                                    height="250px"
                                    width="390px"
                                    id="boximg"
                                />
                                <div id="Description2">
                                    <p className='p1'>{item.Title}</p>
                                    {/* <p>{item.Description.slice(0,110)+"..."}</p> */}
                                </div>
                          
                        </div>
                    );
                })}
         </div>
         <br/>
            

            <h2>Tour Packages</h2>
            <br/>

         
         <div className='dynamiccon'>
         {nextItems2.map((item, index) => {
                    return (
                        <div className="shortcon" key={index}>
                            {/* <p>{item.Title} Tour Packages</p> */}
                           
                                <img
                                    src={item.image}
                                    alt="not found"
                                    height="250px"
                                    width="390px"
                                    id="boximg"
                                />
                                <div id="Description2">
                                    <p className='p1'>{item.Title}</p>

                                   <p className='p2'> {item.duration}</p>
                                </div>
                          
                        </div>
                    );
                })}
         </div>
            

            
        </div>
        
        </>
    )
}



export default TrsmDynamic;
