

import {React , useEffect} from 'react'

function Navbar ({color}) {
  useEffect(() => {
   alert("color was changed");
  }, [color])
  
    
  return (
    <div > I am navbar OF {color} color heheh......</div>
  )
}

export default Navbar















