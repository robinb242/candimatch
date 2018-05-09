
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./Nav.css";
import { Link } from "react-router-dom"

export default class Nav extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>CandiMatch</Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to="/" className="nav-link">  Home </Link> 
           </Menu.Item> 
          
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
         <Link to="/pages/about" className="nav-link">  About </Link>
         </Menu.Item>

        <Menu.Item name='news' active={activeItem === 'news'} onClick={this.handleItemClick}>
         <Link to="/pages/news" className="nav-link">  News </Link>
         </Menu.Item>
        <Menu.Menu position='right'>
        	<Menu.Item name='candidate login' active={activeItem === 'candidate login'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
