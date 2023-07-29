
const contact = () => {
  return (
    <>
       <div id="contactUs" className="contactUs">
        <h1 id="contactText">Contact Us</h1>
        <form action="" className="contact">
            <div className="first">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email"/>
            </div>
            <div className="second"> <input type="text" placeholder="Subject"/>
            </div>
            <div className="third"> <textarea name="" id="" cols="44" rows="10" placeholder="Message"></textarea></div>
            <div className="fourth"> <a href="">Send Message</a></div>

        </form>
    </div>
    </>
  )
}

export default contact
