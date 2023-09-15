import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=> {
    return (
      <>
        <div id="navy">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid text-center">
              <Link className="navbar-brand" to="/">
          NewsMonkey
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link id="qq" className="nav-link active" aria-current="page" to="/NEWS/">
                    </Link>
                  </li>
                <li className="nav-item">
                    <Link id="q" className="nav-link active" aria-current="page" to="/">
                      <h6>Home</h6>
                    </Link>
                  </li>
                  <li className="nav-item">

                    <Link id="w" className="nav-link active" aria-current="page" to="/business">
                      <h6>Business</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link id="e" className="nav-link active" aria-current="page" to="/entertainment">
                      <h6>Entertainment</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link id="r" className="nav-link active" aria-current="page" to="/health">
                      <h6>Health</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link id="t" className="nav-link active" aria-current="page" to="/science">
                      <h6>Science</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link id="y" className="nav-link active" aria-current="page" to="/sports">
                      <h6>Sports</h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link id="u" className="nav-link active" aria-current="page" to="/technology">
                      <h6>Technology</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }

export default Navbar