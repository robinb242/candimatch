import React from "react";
import "./Nav.css";



<div>
  <Menu pointing secondary>
    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
    <Menu.Item name='news' active={activeItem === 'news'} onClick={this.handleItemClick} />
    <Menu.Menu position='right'>
      <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
    </Menu.Menu>
  </Menu>
</div>


