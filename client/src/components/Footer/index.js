import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Grid, Header, Segment} from 'semantic-ui-react'

function Footer() {
    return (
      <>

        <Segment basic style={{backgroundColor:'yellow', height:'20vh', textAlign:'center', paddingTop:"20px"}}>

              <Header as="h1">Get a 15% discount coupon</Header>
              <Header subheader>CODE: F1412</Header>

        </Segment>
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