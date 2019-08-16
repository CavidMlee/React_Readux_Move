import React, { Component } from 'react'

import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';
import { Link, NavLink } from 'react-router-dom';
import {
  Container,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react'

export default class Header extends Component {

  state = {
    menuFixed: false,
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state
    return (
      <div>
        <div>
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Menu
              borderless
              fixed={menuFixed ? 'top' : undefined}
              style={menuFixed ? fixedMenuStyle : menuStyle}
            >
              <Container text>
                <Menu.Item as={Link} to={'/'} exact="true">
                  <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                  <Menu.Item header>MovieApp</Menu.Item>
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/movies'} exact>       {/* <Link to={'movies'}>Movies</Link>   bununla eynidir(as={Link})*/}
                  Movies
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/movies/new'} exact>
                  Add New
                  </Menu.Item>
              </Container>
            </Menu>
          </Visibility>
        </div>
      </div>
    )
  }
};
