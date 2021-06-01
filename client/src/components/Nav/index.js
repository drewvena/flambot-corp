import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


function Nav() {
  
  function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <div>
            
            <ul>
              <li>
                <Link to="/orderHistory">
                  Order History
                </Link>
              </li>
              <li>
                <a href="/" onClick={() => Auth.logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
          
        );
      } else {
        return (
          <ul>
            <li>
              <Link to="/signup">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
        );
      }
    }

  return (
      <header>
          <h1>Flambot Corp</h1>

          <nav>
              {showNavigation()}
          </nav>
      </header>
  );
}

export default Nav;