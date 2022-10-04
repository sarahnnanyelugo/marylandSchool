import React from 'react';
import Pex from "../../../../assets/building@2x.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CBreadcrumbItem } from '@coreui/react'
import { CBreadcrumb } from '@coreui/react'
import Pdf from "./pdf2.pdf";

import Interview from "../../../../assets/interview.png";







function Result() {
  return (
    <>
      <section>
        <div className="header-img">
          <img src={Pex} alt="Header" className="img-fluid" />
        </div>
      </section>
      <CBreadcrumb style={{ "--cui-breadcrumb-divider": "'>'" }}>
        <CBreadcrumbItem href="/">&nbsp; Home</CBreadcrumbItem>
        <CBreadcrumbItem href="/academics/how_to_apply">
          Admission
        </CBreadcrumbItem>
        <CBreadcrumbItem active>Transfer</CBreadcrumbItem>
      </CBreadcrumb>

      <section className="container">
        <div className="comments">
          <div className="intro">
            <small>ADMISSION </small>
            <header>Transfer</header>
          </div>
          <div className="create">
            <div className="sub-cover">
              <ul className="sub-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/academics/how_to_apply"}>How To Apply</Link>
                </li>
                <li>
                  <Link to={"/academics/school-fees"}>School Fees</Link>
                </li>
                <li>
                  <Link
                    className="active"
                    to={"/academics/result_&_scholarships"}
                  >
                    Transfer
                  </Link>
                </li>
              </ul>
            </div>
            <p>Admission Requirements</p>
            <p>JSS 2 & SS 1 (TRANSFER)</p>
            <p>
              Sale of Admission form for Jss2 and SS1 transfer usually starts
              April and it runs in batches. Sales of Entrance Forms (Point of
              Sales are usually: Maryland Convent Private School, Maryland;
              Catholic Church of Presentation G.R.A & School Bookshop).
            </p>
            <h4>SS 1 (RETURNING STUDENTS)</h4>
            <p>
              Returning Student here refers to old MCSS Students from JS 3
              coming into SS 1
            </p>
            <p>
              Payment of N2, 000.00 for Application into Senior School form via
              cash.
            </p>
            <br /> <br />
            <div className="col-md-12 flexy interview2">
              <div className="col-md-3">&nbsp;</div>

              {/* <div className="col-md-6 interview">
                <img src={Interview} alt="Header" className="img-fluid" />
                <br />
                <br />
                <br />

                <div className="interbutton">
                  {" "}
                  <a
                    href={Pdf}
                    without
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btndownload"
                  >
                    Click to Download{" "}
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Result