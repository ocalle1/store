import React from "react";
// import fb from ''
import tiktok from '../images/tiktok.png'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import '../footer/footer.css'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="sb_footer section_padding">
                    <div className="sb_footer-links">
                        <div className="sb_footer-links_div">
                            <h4>Contact</h4>
                            <a href="/employee">
                                <p>Employee</p>
                            </a>
                            <a href="/contact">
                                <p>Contact</p>
                            </a>
                            <a href="/About">
                                <p>About</p>
                            </a>
                        </div>
                        <div className="sb_footer-links_div">
                            <h4>Contact</h4>
                            <a href="/resouces">
                                <p>Resources</p>
                            </a>
                            <a href="/testimonial">
                                <p>testimonial</p>
                            </a>
                            <a href="/social">
                                <p>Social media</p>
                            </a>
                        </div>
                        <div className="sb_footer-links_div">
                            <h4>Coming soon on</h4>
                            <div className="socialmedia">
                                <p><img src={fb} alt="" /></p>
                                <p><img src={twitter} alt="" /></p>
                                <p><img src={tiktok} alt="" /></p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    );
};

export default Footer;