import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Grid, Header, Segment, Button, ButtonContent} from 'semantic-ui-react'

function Footer() {

  function copyTextBtn() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }

    return (

      <div>

        <Segment basic style={{backgroundColor:'yellow', height:'20vh', textAlign:'center', paddingTop:"20px"}}>

              <Header as="h1">Get a 15% discount coupon</Header>
              <Button secondary animated="vertical" onClick={copyTextBtn}>
                <Button.Content hidden>Click to Copy!</Button.Content>
                <Button.Content visible>CODE: F1412</Button.Content>
              </Button>

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

        </div>
      );
}

export default Footer; 