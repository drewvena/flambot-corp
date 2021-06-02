import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


function Nav() {
  
  function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <div>
            
            <ul>
              <li className="px-2">
                <Link to="/orderHistory">
                  Order History
                </Link>
              </li>
              <li className="px-2">
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
          
        );
      } else {
        return (
          <ul className="flex-row">
            <li className="px-2">
              <Link to="/signup">
                Signup
              </Link>
            </li>
            <li className="px-2">
              <Link to="/login">
                Login
              </Link>
            </li>
          </ul>
        );
      }
    }

  return (
      <header className="flex-row px-1 py-1">
          <h1>Flambot Corp</h1>

          <nav>
              {showNavigation()}
          </nav>
      </header>
  );
}

export default Nav;