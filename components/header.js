import Link from "next/link"
const header = () => {
  return (
    <>
        <div className="hero">
        <div className="heroText">
            <h1>WEB</h1>
            <h1>SOLUTION</h1>
            <h1>COMPANY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.

            </p>
            <div id="secondBtnDiv"><Link href="contactUs" id="btn2">Get Started</Link></div>

        </div>
        <div className="heroPic">
            <img  src="/images/abdulhadi.png" alt=""/>
        </div>
    </div>
    </>
  )
}

export default header
