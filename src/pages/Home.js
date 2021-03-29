import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import { Hero } from '../Components/HeroSection/Hero'


export const Home = () => {

    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <Hero/>
            
        </>
    )
}
