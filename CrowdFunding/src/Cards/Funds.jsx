import React from 'react';
import {Routes, Route} from 'react-router-dom'; 
import Home from './Home';
import FundsDetails from './FundsDetails';
import About from './About';
import Contacts from './Contacts';
import Supports from './Supports';
import Donationform from './Donationform';
const Funds = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/FundsDetails' element={<FundsDetails/>} />
           <Route path='/About' element={<About/>}/>
           <Route path='/Contacts' element={<Contacts/>} />
           <Route path='/Supporters/:SupportersId' element={<Supports/>} />
           <Route path='Form' element={<Donationform/>} />
    </Routes>
    </div>
  )
}

export default Funds