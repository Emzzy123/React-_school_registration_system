import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1  */}
          <div className="col">
            <h4>SCHOOL REGISTRATION SYSTEM</h4>
            <ul className="list-unstyled">
              <li>+447448786966</li>
              <li>Wolverhampton, UK</li>
              <li>WV10</li>
            </ul>
          </div>
          {/* Column 2  */}
          <div className="col">
            <h4>UNIVERSITY OF WOLVERHAMPTON</h4>
            <ul className="list-unstyled">
              <li>https://www.wlv.ac.uk</li>
              <li>01902321000</li>
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
