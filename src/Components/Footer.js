import React from "react";
import "./Footer.css";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1  */}
          <div className="col">
            <h4>School Registration System</h4>
            <ul className="list-unstyled">
              <li>+447448786966</li>
              <li>Wolverhampton, UK</li>
              <li>WV10</li>
            </ul>
          </div>
          {/* Column 2  */}
          <div className="col">
            <h4>University of Wolverhampton</h4>
            <ul className="list-unstyled">
              <li>https://www.wlv.ac.uk</li>
              <li>01902321000</li>
              <li>West Midland</li>
              <li>Wolverhampton, UK</li>
              <li>WV1 1LY</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col">
            <h4>EC Designs</h4>
            <ul className="list-unstyled">
              <li>https://www.chidokaemeka.com</li>
              <li>+447448786966</li>
              <li>Wolverhampton, UK</li>
              <li>WV10</li>
            </ul>
          </div>
        </div>
        <div>
          <ul class="socials">
            <IconContext.Provider value={{ color: "#2C1A2A" }}>
              <li>
                <a href="https://github.com/Emzzy123">
                  <FaIcons.FaGithubSquare />
                </a>
              </li>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#CE2F50" }}>
              <li>
                <a href="https://www.instagram.com/emzzy.c/">
                  <FaIcons.FaInstagram />
                </a>
              </li>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#DE1222" }}>
              <li>
                <a href="https://www.pinterest.co.uk/chidokae/">
                  <FaIcons.FaPinterestSquare />
                </a>
              </li>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#006EAB" }}>
              <li>
                <a href="https://www.linkedin.com/in/emeka-chidoka-a4a633158/">
                  <FaIcons.FaLinkedinIn />
                </a>
              </li>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#42D251" }}>
              <li>
                <a href="https://wa.me/+447448786966">
                  <FaIcons.FaWhatsappSquare />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} SCHOOL REGISTRATION SYSTEM | All
            right reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
