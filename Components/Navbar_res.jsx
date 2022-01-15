import React from 'react';



const Navbar_res = () => {
    return (
       <>
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-navbar" style={{direction:'rtl'}}>
        <div className="container-fluid">
         

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse " style={{direction:'rtl'}} id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">خانه</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">سفارش قلیون</a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">محصولات ما</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true"> درباره ما</a>
              </li>
              <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
            </ul>
          </div>


          <a className="navbar-brand ml-3" href="#">Atlantis-Co</a>
        </div>
         
      </nav>
       </>
    )
}

export default Navbar_res
