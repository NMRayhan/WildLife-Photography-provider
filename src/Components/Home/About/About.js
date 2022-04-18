import React from "react";
import myPicture from "../../../Images/professonal-removebg-preview.png";
import "./About.css";

const About = () => {
  return (
    <div style={{ height: "auto" }}>
      <div className="w-75 mx-auto">
        <div className="text-center mt-2 row justify-content-center align-items-center">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <img src={myPicture} alt="" className="myPic" />
          </div>
          <div className="col-sm-6 col-md-8 col-lg-8">
            <h2>Nur Mohammad Rayhan</h2>
          </div>
        </div>
        <div className="mt-5">
          <h2>About My self</h2>
          <h5>
            Motivated software engineering graduate from the daffodil
            International University with 6 months experience in software
            development. IEEE Computer Society Merwin Scholarship winner in
            2018. Seeking to use proven skills in JavaScript and project
            management via JIRA to meet business needs at GFC Inc.{" "}
          </h5>
        </div>

        <div className=" mt-5">
          <h2>Education</h2>
          <h5>
            2018-2022, B.Sc. in Software Engineering daffodil International
            University, dhaka{" "}
          </h5>
          <ul>
            <li>
              Pursued my passion for software structures through six advanced
              electives in software systems, architecture, and modeling.
            </li>
            <li>
              Member of the RIT Women in Computing and Society of Software
              Engineers student organizations.
            </li>
            <li>
              Article “Why Android is Better Than You Think” was published in
              TIR SEE newsletter.
            </li>
          </ul>
        </div>

        <div className=" mt-5">
          <h2>Skills</h2>
          <ul>
            <li>Teamwork</li>
            <li>Creative thinking</li>
            <li>Analytical thinking</li>
            <li>Web programming</li>
            <li>Python</li>
            <li>Java</li>
            <li>Excellent interpersonal skills</li>
          </ul>
        </div>

        <div className=" mt-5">
          <h2>Languages</h2>
          <ul>
            <li>Bangla(advance)</li>
            <li>English(Basic)</li>
          </ul>
        </div>
        <div className=" mt-5">
          <h2>Hobbies and Interests</h2>
          <ul>
            <li>Weekend computer class volunteer at local YMCA.</li>
            <li>
              Manage web and software engineering blog called “Cup of Java”.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
