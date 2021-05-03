import React from 'react'
import { GiGraduateCap} from 'react-icons/gi'
import { FaBriefcase} from 'react-icons/fa';
import { FaBicycle} from 'react-icons/fa';
import { ImHeadphones} from 'react-icons/im';
import { FaFootballBall} from 'react-icons/fa';
import { GiSkills} from 'react-icons/gi';
import { AiFillHtml5} from 'react-icons/ai';
import { SiJavascript} from 'react-icons/si';
import { FaReact} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import { SiJquery} from 'react-icons/si';
import { FaAws} from 'react-icons/fa';
import { BiSwim} from 'react-icons/bi';
import { GiPhotoCamera} from 'react-icons/gi';
import { GiBookCover} from 'react-icons/gi';
import { FaTwitter} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai'
import {BsPhone} from 'react-icons/bs'
import {FaSmileWink} from 'react-icons/fa'





const main = () => {
    return (
        <>
        <div className="sm1:grid sm1:grid-cols-3 sm1:gap-4 lg1:mx-10 lg1:mt-4">
            
            <div className="sm1:col-start-2 sm1:col-span-2 sm1:bg-gray-200 lg1:rounded-4xl lg1:space-y-5 ">
                    <div className="flex items-center bg-gray-200 space-x-2 xs:p-2 ">
                        <span className="text-2xl"><GiGraduateCap/></span>
                        
                        <p className="font-medium sm1:text-xl">Education</p>
                    </div>
                    <div className="xs:text-xs xs:p-2">
                        <p className="font-medium sm1:text-lg">BSC. Mathematics and computer science</p>
                    </div>
                    
                    <div>
                        <ul className="mx-2 flex justify-between items-center xs:text-xs sm1:text-lg">
                            <li className="">Jomo kenyatta university of agriculture and technology</li>
                            <li>May 2011- Dec 2015</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="mx-2 mt-2 flex justify-between xs:space-x-12 xs:text-xs sm1:text-lg">
                            <li>Master web developer</li>
                            <li>2015-Present</li>
                        </ul>
                    </div>

                    <div className="flex items-center bg-gray-200 space-x-2 xs:p-2 sm1:text-lg">
                        <FaBriefcase/>
                        <p className="font-medium">Experience</p>
                    </div>

                    <div>
                        <p className="font-light xs:p-1 xs:mx-1  bg-gray-100">Web</p>
                    </div>

                    <div>
                        <ul className="mx-2 mt-2 flex justify-between xs:space-x-12 xs:text-xs xs:mt-1 xs1:text-sm sm1:text-lg">
                            <li>Freelance ux/ui designer</li>
                            <li>2015-Present</li>
                        </ul>
                        <ul className="mx-2 mt-2 flex justify-between xs:space-x-12 xs:text-xs xs1:text-sm sm1:text-lg">
                            <li>Freelance web developer</li>
                            <li>2015-Present</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-light xs:p-1 xs:mx-1 xs:mt-2 bg-gray-100">Other..</p>
                    </div>
                    <div>
                        <ul className="mx-2 mt-2 xs:text-xs xs1:text-sm sm1:text-lg xs:space-y-2">
                            <li>Gas station admnistrator</li>
                            <li>Mash East Africa Ltd  2015-2018</li>
                        </ul>
                    </div>

            </div>

            <div className="sm1:row-start-1 sm1:col-start-1 sm1:bg-gray-200 rounded ">
                    <div className="flex items-center  bg-gray-100   space-x-2 xs:p-2 sm1:text-lg">
                     <span className="lg1:text-2xl"><GiSkills/></span>
                        
                        <p className="font-medium">Skills</p>
                    </div>
                    <div>
                    <ul className="flex justify-between mx-2 p-3 mt-2 bg-gray-200 sm1:grid sm1:grid-cols-3 sm1:grid-rows-3 sm1:gap-6  sm1:text-3xl lg1:text-4xl  rounded ">
                        <li><AiFillHtml5/></li>
                        <li><SiJavascript/></li>
                        <li><FaReact/></li>
                        <li><SiTailwindcss/></li>
                        <li><SiJquery/></li>
                        <li><FaAws/></li>
                    </ul>
                </div>

                <div className="flex items-center bg-gray-100 mt-2 xs:p-2 sm1:text-lg">
                    <span className="lg1:text-2xl"><FaSmileWink/></span>
                    
                    <p className="font-medium ml-2">Hobbies</p>
                </div>
                <div>
                    <ul className="flex justify-between mx-2 p-3 mt-2 bg-gray-200 sm1:grid sm1:grid-cols-3 sm1:grid-rows-3 sm1:gap-6 sm1:text-3xl lg1:text-4xl rounded">
                        <li><BiSwim/></li>
                        <li><GiPhotoCamera/></li>
                        <li><FaBicycle/></li>
                        <li><ImHeadphones/></li>
                        <li><FaFootballBall/></li>
                        <li><GiBookCover/></li>
                        
                    </ul>
                </div>
                <div className="bg-gray-200 mt-2  ">
                    <div className="flex items-center bg-gray-100 space-x-2 xs:p-2 sm1:text-lg">
                        <span className="lg1:text-2xl"><BsPhone/></span>
                        
                        <p className="font-medium ml-2">Social media</p>
                    </div>
                </div>
                <div>
                 
                    <div className="mx-2 p-2 bg-gray-200 mt-2 mb-2 xs:rounded xs:flex  sm1:block lg1:text-2xl">
                        <div className="flex items-center">
                        <FaTwitter/>
                        <span className="ml-2 mr-4">Twitter</span>

                        </div>

                        <div className="flex items-center">
                        <AiFillInstagram/>
                        <span className="ml-2">Instagram</span>
                        </div>

                    </div>
                </div>

            </div>
            

         
        </div>

        </>
    )
}

export default main
