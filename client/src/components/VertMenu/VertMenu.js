import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import "./VertMenu.css";

export default class VertMenu extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
     
    	 <Menu vertical>
            <Menu.Item id="vertMenuItem" active={activeItem === 'faq'} onClick={this.handleItemClick}>
            <Menu.Header>My Voting Booth</Menu.Header>
            <Menu.Menu>
              <Image 
              id="vertMenuIcon" 
              size="tiny"
              src={require('../../assets/images/VotingBoxIcon.png')}
              href="https://www.sos.state.mn.us/elections-voting/register-to-vote"
              target="_blank" 
              />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item id="vertMenuItem" active={activeItem === 'faq'} onClick={this.handleItemClick}>
            <Menu.Header>Research Issues</Menu.Header>

            <Menu.Menu>
              <Image 
              id="vertMenuIcon" 
              size="tiny"
              src={require('../../assets/images/CapitolBldg.png')}
              href="https://www.leg.state.mn.us/lrl/guides/" 
              target="_blank"
                />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item name='candidates' to='candidates' id="vertMenuItem" onClick={this.handleItemClick}>
            <Menu.Header>Research Candidates</Menu.Header>

            <Menu.Menu>
                 <Image 
                 id="vertMenuIcon"
                  size="tiny"
                 src={require('../../assets/images/candidateIcon.png')}
                 href="../pages/candidates" 
                  />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item id="vertMenuItem" onClick={this.handleItemClick}>
            <Menu.Header>Register To Vote</Menu.Header>

            <Menu.Menu>
                 <Image 

                 id="vertMenuIcon" 
                 size="tiny"
                 src={require("../../assets/images/vote.png")}
                 href="https://www.sos.state.mn.us/elections-voting/register-to-vote" 
                 target="_blank"
                 />
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item id="vertMenuItem" onClick={this.handleItemClick}>
            <Menu.Header>Find Your Polling Place</Menu.Header>

            <Menu.Menu>
                 <Image 

                 id="vertMenuIcon" 
                 size="tiny"
                 src={require("../../assets/images/VotingBoxIcon.png")}
                 href="https://pollfinder.sos.state.mn.us/" 
                 target="_blank"
                 />
            </Menu.Menu>
          </Menu.Item>

        </Menu>

        )
}
}