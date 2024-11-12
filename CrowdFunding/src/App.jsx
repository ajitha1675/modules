import React from 'react';
import Home from './Cards/Home';
import FundsDetails from './Cards/FundsDetails';
import About from './Cards/About';
import Contacts from './Cards/Contacts';
import Supports from './Cards/Supports';
import Donationform from './Cards/Donationform';
import Funds from './Cards/Funds';

const App = () => {
  return (
    <div className='px-4 sm:px-[5w] md:px-[7vw] lg:px-[9vw]'>
      <NavBar />
     <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/FundsDetails' element={<FundsDetails/>} />
           <Route path='/About' element={<About/>}/>
           <Route path='/Contacts' element={<Contacts/>} />
           <Route path='/Supporters/:SupportersId' element={<Supports/>} />
           <Route path='Form' element={<Donationform/>} />
           <Route path='/Funds' element={<Funds/>} />
      </Routes>

    </div>
  )
}

export default App;