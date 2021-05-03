import React from 'react'
import juu from '../images/3.jpg'
import picha from '../images/moses.png'
import { MdEmail} from 'react-icons/md';
import { CgPhone} from 'react-icons/cg';



const Top = () => {
    return (
     <>
     <div className="relative grid grid-cols-3 grid-rows-2 inset-0">
            <div className="h-full w-full col-start-1 row-start-1 col-span-3  row-span-2 relative opacity-60">
             <img  src={juu} alt="top"/>                   
            </div>
            <div className="absolute mx-2 lg1:mx-10 top-8 lg1:top-24 font-semibold"  >
                <div >
                    <span className="text-sm sm1:text-xl lg1:text-5xl" >MOSES PHIFER MUSYIMI MATHEKA</span>          
                </div>
                <div>
                <span className="text-xs sm1:text-sm font-light lg1:text-3xl">UI/UX DESIGNER / WEB DEVELOPER</span>
                </div>
            </div>
            <div >
               <img className="absolute xs:h-20 xs:w-20 xs:ml-2  xs1:h-32 xs1:w-32 xs3:h-36 xs3:h-36 sm1:h-52 sm1:w-52 sm2:h-64 sm2:w-64 lg1:h-96 lg1:w-96 top-24 sm1:top-28 sm2:top-48 lg1:top-80 lg1:mx-10 rounded sm1:rounded-xl " src={picha} alt="me"/>
            </div>
            <div className="absolute xs:bottom-2 xs:right-4 xs1:bottom-4 xs2:bottom-6 xs3:bottom-8 sm1:bottom-10 lg1:bottom-36 sm2:right-8 sm2:bottom-14  xs:space-y-2 sm2:space-y-4">
                <span className="flex items-center sm2:text-xl" >
                    <span className="lg1:text-6xl"><CgPhone/></span>
                    
                    <span className="xs:text-xs xs:ml-4 sm1:text-xl sm2:text-3xl lg1:text-5xl">+254721404459</span>
                </span>
                <span className="flex items-center sm2:text-xl">
                    <span className="lg1:text-6xl"><MdEmail/></span>
                    
                    <span className="xs:text-xs xs:ml-4 sm1:text-xl sm2:text-3xl lg1:text-5xl">musyimi13@gmail.com</span>
                </span>
            </div>
     </div>
        
    </>
    )
}

export default Top
