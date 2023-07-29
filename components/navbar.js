import Link from "next/link"
import { useState } from "react"


const navbar = () => {

    const [menu, setMenu]=useState(false)

const menuHandler=()=>{
    if(menu===true){
        setMenu(false)
    }
    else{
        setMenu(true)
    }
}


  return (
    <>
          <nav>
        <div className="left">
            <Link href={"/"}>
                <h1>TechSol</h1>
            </Link>
        </div>
        <div className="right">
            <ul>
                <li><Link href="#teamDiv">Team</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#contactUs">Contact</Link></li>
                <div><Link href="#contactUs" id="btn1">Get Started</Link></div>
            </ul>
        </div>
        <div className="icon">
            <i id="navOpenBtn" onClick={menuHandler} style={{display: menu?"none":"block"}} className="fa-sharp fa-solid fa-bars"></i>
            <i id="navCloseBtn" onClick={menuHandler} style={{display: menu?"block":"none"}} className="fa-solid fa-xmark"></i>
        </div>
    </nav>


<div id="menu" style={{top:menu?"50px":"-300px"}}>
            <ul>
                <li><Link href="#teamDiv">Team</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#contactUs">Contact</Link></li>
            </ul>
        </div>
        
    </>
  )
}

export default navbar
