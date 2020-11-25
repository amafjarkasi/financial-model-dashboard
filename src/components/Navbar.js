import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    let currentdate = new Date();
    
    
    return (
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Financial Market Dashboard</a>
          <a className="navbar-brand" href="/">&#x2800;&#x2800;&#x2800;&#x2800;&#x2800;Date: {currentdate.getMonth()+1+"/"
                + currentdate.getDate()+"/"
                + currentdate.getFullYear()+ " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes ()}</a>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  <span className="no-icon">Main Page</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar