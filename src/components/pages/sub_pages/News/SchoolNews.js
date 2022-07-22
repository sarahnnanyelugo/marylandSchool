import React from 'react';
import Pex from "../../../../assets/smile2.png";


// import Circle from "../../../assets/circle2.png";
import { CBreadcrumbItem } from "@coreui/react";
import { CBreadcrumb } from "@coreui/react";
import "./News.css";
// import Circle from "../../assets/Circle.svg";
import Pdf from "../Academics/pdf2.pdf";

// import Pdf from "../assets/pdf2.pdf";

// import Interview from "../assets/interview.png";

function SchoolNews() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>

        <CBreadcrumbItem active>News & Events</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>HOME </small>
            <header>News & Events</header>
            {/* <img className="circle img-fluid " src={Circle} alt="" /> */}
          </div>

          <div className="col-md-12 flexy">
            <a
              href={Pdf}
              without
              rel="noopener noreferrer"
              target="_blank"
              className="btndownload col-md-5"
              style={{textDecoration:'none',color:'black'}}
            >
              <div className="col-md-12 event event1">
                <h6 className="title">NEWS</h6>
                <h5 style={{ backgroundColor: "black", color: "white" }}>
                  LIST OF SUCCESSFUL TRANSFER CANDIDATES
                </h5>
              </div>
            </a>

            <div className="col-md-5 event event2">
              <h6 className="title">EVENT</h6>
              <h5>INTERHOUSE SPORTS</h5>
            </div>
          </div>

          <div className="col-md-12 flexy">
            <div className="col-md-5 event event3">
              <h6 className="title">EVENT</h6>
              <h5>CHRISTMAS PARTY</h5>
            </div>

            <div className="col-md-5 event event4">
              <h6 className="title">EVENT</h6>
              <h5>CHURCH SERVICE</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SchoolNews