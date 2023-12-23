import React from 'react'
import { globalcontext } from '../Context/Context'
import { TbSunFilled } from "react-icons/tb"
import { BiSolidMoon } from "react-icons/bi";


const ThemeToggle = () => {
    const {isdark ,  toggle} = globalcontext();
    // console.log(value)
    return (

     
    <div className='toggle-container'>

       <button className='dark-toggle' onClick={()=>toggle()} >
              {
          isdark ?   <BiSolidMoon size={30} className='moon'/> :  <TbSunFilled size={25} />    
         
              }              
       </button>
       

    </div>
  )
}

export default ThemeToggle