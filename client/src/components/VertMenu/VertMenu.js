import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

export default class VertMenu extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
    	 <Menu vertical>
            <Menu.Item id="vertMenuItem" active={activeItem === 'faq'} onClick={this.handleItemClick}>
            <Menu.Header>My Voting Booth</Menu.Header>
            <Menu.Menu>
              <Image id="vertMenuIcon" height="60" src='https://cdn4.iconfinder.com/data/icons/democracy/500/Political_2-512.png'/>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item id="vertMenuItem" active={activeItem === 'faq'} onClick={this.handleItemClick}>
            <Menu.Header>Research Issues</Menu.Header>

            <Menu.Menu>
              <Image id="vertMenuIcon" height="60" src='https://cdn4.iconfinder.com/data/icons/democracy/500/Political_3-512.png'  />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item id="vertMenuItem" onClick={this.handleItemClick}>
            <Menu.Header>Research Candidates</Menu.Header>

            <Menu.Menu>
                 <Image id="vertMenuIcon" height="60" src='https://cdn3.iconfinder.com/data/icons/gray-user-toolbar/512/reporter-512.png' />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Support</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                FAQs
              </Menu.Item>
              <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
                Contact
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
        )
}
}