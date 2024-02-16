// import React, { useState } from 'react';
// import "./Compo.css";
// //import { useEffect,useCallback} from 'react';

// import { NavLink, useNavigate } from 'react-router-dom';
// import { IoPersonCircleSharp} from 'react-icons/io5'; 
// import { FaPhoneVolume } from "react-icons/fa6";

// const Header = () => {

//  const navigate = useNavigate()

//  const [userIcon,setuserIcon]=useState(false);

// const handleusericon=()=>{
//     setuserIcon(!userIcon)
//   }



// const logoutbtn=()=>{
//   localStorage.clear('token')
 
//   navigate('/login')
  
  
// }
  
//    const token = localStorage.getItem('token');

//    const username = localStorage.getItem('selfname')




//     return(
//         <>
//         <div className='header'>

//             <div className='logo'>
//                 <img src='https://www.theindiatourism.com/images/logo.webp' alt='hd'/>

//             </div>
//             <div className='middle'>
//                 <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='hd'/>

//             </div>
//             <div className='mail'>
//                 <p>Email : info@theindiatourism.com</p>
//                 <FaPhoneVolume/>: 1234567890
//             </div>
//             {/* <div className='login'>
      
//         <NavLink to='/login'>
//           <IoPersonCircleSharp className='icon'/>
//         </NavLink>

//     </div> */}
//           <div className='login'>

//       <NavLink to='/login' id='login-link'>
//       {token?  <p className='usernamewithicon' onClick={handleusericon}><span>{username[0]?.toUpperCase()}</span> 
// </p> : <IoPersonCircleSharp className='icon'/> }

// {userIcon && (<div className='usericonclick'>
//             {/* <span className='usericondashborad'> */}
       
//           <span className='usericonlogout' onClick={logoutbtn}>Logout</span></div>)}


       


          
//       </NavLink>
//     </div>


//         </div>
     
        
//         </>
//     )
// }



// export default Header;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPersonCircleSharp } from 'react-icons/io5'; 
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
    const navigate = useNavigate();
    const [userIcon, setUserIcon] = useState(false);
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('selfname');

    const handleUserIcon = () => {
        setUserIcon(!userIcon);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('selfname');
        navigate('/login');
    };

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src='https://www.theindiatourism.com/images/logo.webp' alt='hd'/>
                </div>
                <div className='middle'>
                    <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='hd'/>
                </div>
                <div className='mail'>
                    <p>Email: info@theindiatourism.com</p>
                    <FaPhoneVolume/>: 1234567890
                </div>
                <div className='login'>
                    <NavLink to='/login' id='login-link'>
                        {token ? (
                            <p className='usernamewithicon' onClick={handleUserIcon}>
                                <span>{username ? username[0]?.toUpperCase() : ''}</span> 
                            </p>
                        ) : (
                            <IoPersonCircleSharp className='icon'/>
                        )}
                        {userIcon && (
                            <div className='usericonclick'>
                                <span className='usericonlogout' onClick={handleLogout}>Logout</span>
                            </div>
                        )}
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;

