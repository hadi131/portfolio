import Link from "next/link"
const footer = () => {
  return (
    <>
       <footer>
        <div className="foot foot1">
            <div className="logo">
                <Link href={"/"}>
                    <h1>TechSol</h1>
                </Link>
            </div>
            <p>
                Enabling The Age Of Technology
            </p>
            <div className="footerIcons">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-skype"></i>
            </div>
        </div>
        <div className="foot foot2">
            <ul>
                <li><Link href="#teamDiv">Team</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#contactUs">Contact</Link></li>
            </ul>
        </div>
        <div className="foot foot3">
            <div className="innerFoot3">
                <p>Ideas & Plans </p>
                <p>Prompt Strategies </p>
                <p>Content Composing </p>
                <p>Design & Development</p>
            </div>
        </div>
        <div className="foot foot4">
            <div className="innerFoot4">
                <p><i className="fa-solid fa-phone"></i>+92 303 5553940</p>
                <p><i className="fa-solid fa-envelope"></i>hadi22905@gmail.com</p>
                <div><Link href="#contactUs" id="footBtn" >Contact Us</Link></div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default footer
