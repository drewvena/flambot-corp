import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react'
import Cart from '../Cart';


function Nav() {
  
  function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <Menu horizontal link inverted  size='massive' >
              <Link to="/">
              <Menu.Item header><Icon name="globe"/>Flambot Corp </Menu.Item>
              </Link>
            <Menu.Item as='a'>
                <Link to="/orderHistory">
                  Order History
                </Link>
                </Menu.Item>
              <Menu.Item as='a'>
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
                </Menu.Item>
              </Menu>
        );
      } else {
        return (
          <Menu horizontal link inverted  size='massive' >
              <Link to="/">
              <Menu.Item header><Icon name="globe"/>Flambot Corp </Menu.Item>
              </Link>            
              <Menu.Item as='a'>
              <Link to="/signup">
                Signup
              </Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="/login">
                Login
              </Link>
            </Menu.Item>
          </Menu>
        );
      }
    }

  return (
      <Menu inverted fixed='top'>
              {showNavigation()}
              <Cart />

      </Menu>
  );
}

export default Nav;