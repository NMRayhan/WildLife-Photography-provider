import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date();
  return (
    <div className="bg-secondary">
      <div className="my-2">
        <div className="w-75 mx-auto">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-6 border">
              <h1>Useful Link</h1>
              <div>
                <ul>
                  <a href="#">
                    <li>News</li>
                  </a>
                  <a href="#">
                    <li>Donation</li>
                  </a>
                  <a href="#">
                    <li>Interview</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 border">
              <h1>Social Link</h1>
              <div>
                <ul>
                  <a href="#">
                    <li>Facebook</li>
                  </a>
                  <a href="#">
                    <li>google</li>
                  </a>
                  <a href="#">
                    <li>Instagram</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-white text-center">
            Copyright @ {year.getFullYear()} || Nur Mohammad Rayhan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
