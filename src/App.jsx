

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TurstedBy from './components/TurstedBy'
import Services from './components/Services'
import Ourwor from './components/Ourwor'
import Teams from './components/Teams'

function App() {

  const [theme , setTheme] = useState("light")
  return (
      
     <div className='dark:bg-black relative'>

        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <TurstedBy/>
        <Services/>
        <Ourwor/>
        <Teams/>
      
     </div>
   
    
  )
}

export default App