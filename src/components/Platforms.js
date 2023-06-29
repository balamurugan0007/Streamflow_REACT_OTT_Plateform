import React from 'react'
import "./Home.css"
import {BiMobile} from "react-icons/bi"
import {BsApple} from "react-icons/bs"
import {FiMonitor} from "react-icons/fi"
const Platforms = () => {
  return (
    <div className='container' id='plateform'>
        <h2 className=' mt-4 mx-4'>
            platforms
        </h2>
        <div className=' row justify-content-center my-2 mt-4'  >
            <div className='col-sm my-3' id='card-col' >
                <div className='' id='plateform-cards'>
                
                        <BiMobile  id='Icons'/>
                      <h4 className=' text-center my-2'>
                    Andriod
                     </h4>
                  

                </div>
            </div>

            <div className='col-sm my-3'  id='card-col'>
                <div className='car' id='plateform-cards'>
                
                       <BsApple id='Icons'/>
                      <h4 className=' text-center my-2'>
                    IOS
                     </h4>
                   

                </div>
            </div>

            <div className='col-sm my-3'  id='card-col' >
                <div className='car' id='plateform-cards'>
                
                       <FiMonitor id='Icons'/>
                      <h4 className=' text-center my-2'>
                    Andriod Tv
                     </h4>
                   
                </div>
            </div>
           

        </div>
      
    </div>
  )
}

export default Platforms
