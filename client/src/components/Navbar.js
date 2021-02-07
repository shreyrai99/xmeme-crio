import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
    render() { 
        return ( 
            <nav className="navbar bg-dark">
              <h1>
                <Link to="/">
                  <i className="fas fa-code" /> X-Meme
                </Link>
              </h1>              
            </nav>
         );
    }
}
 
export default Navbar;