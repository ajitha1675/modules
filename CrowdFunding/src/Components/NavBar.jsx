 import React from 'react';
 import { assets} from '../assets';
 import { NavLink } from 'react-router-dom';
 
 const NavBar = () => {
   return (
     <div className='flex items-center justify-between py-5 font-medium'>
       
       <imag src={assets.logo} className='w-36' alt=""/>
       <ul className='hidden sm:flex gap-5 taxt-sm text-gray-700'>
         <NavLink to='/' className={'felx flex-col items-center gap-1'}>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-green-600'/>
         </NavLink>
         <NavLink to='/FundsDetails' className={'felx flex-col items-center gap-1'}>
            <p>FUNDSDETAILS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-green-600'/>
         </NavLink>
         <NavLink to='/About' className={'felx flex-col items-center gap-1'}>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-green-600'/>
         </NavLink>
         <NavLink to='/Contacts' className={'felx flex-col items-center gap-1'}>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-green-600'/>
         </NavLink>
       </ul>

     </div>
   )
 }
 
 export default NavBar