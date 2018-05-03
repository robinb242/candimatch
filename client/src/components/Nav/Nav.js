
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
        <Menu.Item name='news' active={activeItem === 'news'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
        	<Menu.Item name='candidate login' active={activeItem === 'candidate login'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
