import React from 'react';

function Header() {
  return (
  <nav className="navbar navbar-dark bg-dark">
     <div className="container">
        <a className="navbar-brand p-3" href="#Home">
          <img src="logo512.png" alt="" width="40" height="32" className="d-inline-block align-text-top"/>
          React
        </a>
        {/* <div> */}
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="docs-tab" data-bs-toggle="tab" data-bs-target="#docs" type="button" role="tab" aria-controls="docs" aria-selected="true">Docs</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="tutorial-tab" data-bs-toggle="tab" data-bs-target="#tutorial" type="button" role="tab" aria-controls="tutorial" aria-selected="false">Tutorial</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="blog-tab" data-bs-toggle="tab" data-bs-target="#blog" type="button" role="tab" aria-controls="Blog" aria-selected="false">Blog</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="community-tab" data-bs-toggle="tab" data-bs-target="#community" type="button" role="tab" aria-controls="Community" aria-selected="false">Community</button>
          </li>
        </ul>
          <div classNameName="d-flex">
            {/* <form >
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <ul className="nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#versions">v17.0.2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#languages">Languages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#github">Github</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>

  </nav>
 
  );
}

export default Header;
