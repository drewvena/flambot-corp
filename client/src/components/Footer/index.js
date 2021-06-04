import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Grid} from 'semantic-ui-react'

function Footer() {
    return (
      <>

        <div style={{backgroundColor:'yellow', height:'20vh', textAlign:'center'}}>

              <p style={{paddingTop:'30px' }}>Get a 15% discount coupon CODE: F1412</p>
              

        </div>
        <Menu horizontal link inverted  size='small' widths = {5} >
            
            <Menu.Item as='a'>
              FAQ
            </Menu.Item>
            <Menu.Item as='a'>
              Contact
            </Menu.Item>
            <Menu.Item as='a'>
              Legal Notice
            </Menu.Item>
            <Menu.Item as='a'>
              Privacy Notice
            </Menu.Item>
            <Menu.Item as='a'>
              Cookie Statement
            </Menu.Item>

        </Menu>
        </>
      );
}

export default Footer; 