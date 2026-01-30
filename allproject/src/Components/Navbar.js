import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        {/* Brand name */}
        <a className="navbar-brand" href="/">
          Navbar
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar menu */}
        <div className="collapse navbar-collapse" id="menu">
          {/* Left side links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/link">
                Link
              </a>
            </li>

            {/* Select box */}
            <li className="nav-item">
              <select className="form-select" defaultValue="Select">
                <option disabled>Select</option>
                <option value="1">Action</option>
                <option value="2">Another action</option>
                <option value="3">More options</option>
              </select>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="google.com" tabIndex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>

          {/* Search box */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
