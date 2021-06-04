import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Grid} from 'semantic-ui-react'

function Footer() {
    return (
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
      );
}

export default Footer; 