import "./FooterStyle.css"
import { FaFacebook, FaGithub, FaHome,
         FaLinkedin, FaMailBulk, FaPhone,
          FaTwitter, FaInstagram} from "react-icons/fa"
import React from 'react'

const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <h1>Bag Street</h1>
                            <p>"Bag Street: Where Style Meets
                             Functionality in Every Stitch."</p>
                            <p> 35 Street Dehradun Uttarakhand</p>
                            <p>India.</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4><FaPhone size={20}
                         style={{ color: "#fff", marginRight: "2rem" }} />
                          +91 9557548668 </h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20}
                         style={{ color: "#fff", marginRight: "2rem" }} /> 
                         aman.kothiyal24@BagStreet.com </h4>
                    </div>


                </div>
                <div className="left">
                    <h4>About Bag Street</h4>
                    <p>"Bag Street: Unveiling the Art of Carrying Elegance,
                         Comfort, and Utility in Every Bag.Founded in 2015, 
                         Bag Street has been your trusted companion on the 
                         journey of style and convenience.</p>
                        <p>With a passion for crafting high-quality bags that
                         elevate your everyday experiences, we've been weaving
                         stories and memories into every stitch. 
                         Thank you for being a part of our remarkable journey as
                          we continue to redefine the world of bags".</p>

                         <div className="Social">
                         <FaFacebook size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         <FaLinkedin size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         <FaGithub size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         <FaTwitter size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                         <FaInstagram size={20} 
                         style={{ color: "#fff", marginRight: "2rem" }} />

                        
                         </div>
                </div>
            </div>
        </div>
    )
}

export default Footer