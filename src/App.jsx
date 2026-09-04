

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TurstedBy from './components/TurstedBy'

function App() {

  const [theme , setTheme] = useState("light")
  return (
      
     <div className='dark:bg-black relative'>

        <Navbar theme={theme} setTheme={setTheme}/>
        <Hero/>
        <TurstedBy/>
      
     </div>
   
    
  )
}

export default App