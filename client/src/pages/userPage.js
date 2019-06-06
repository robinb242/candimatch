import React from 'react';
import { Icon, Label, Menu, Container, Table } from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';


class UserPage extends React.Component {
  handleClick = (event) => {
    console.log ("UserLogIn loaded");
  };

  render() {
    return <div>
      <Container>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={10}>Question</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='center'>My Answers</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='center'>Candidate 1 Answers</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='center'>Candidate 2 Answers</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            <Table.Row>
              <Table.Cell colSpan='3'>
                <Label color='light grey' ribbon>ENERGY & ENVIRONMENT</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support government funding for the development of renewable energy (e.g. solar, wind, geothermal).</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
              <Table.Cell>Strongly Agree</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support federal regulation of greenhouse gas emmissions.</Table.Cell>
              <Table.Cell>Somewhat Agree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support the use of hydraulic fracking to extract oil and natural gas resources.</Table.Cell>
              <Table.Cell>Somewhat Disagree</Table.Cell>
              <Table.Cell>Disagree</Table.Cell>
              <Table.Cell>Strongly Disagree</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell colSpan='3'>
                <Label color='light grey' ribbon>MARIJUANA</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support the legalization of medical marijuana.</Table.Cell>
              <Table.Cell>Strongly Agree</Table.Cell>
              <Table.Cell>Strongly Agree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support the legalization of marijuana for recreational purposes.</Table.Cell>
              <Table.Cell>Somewhat Disagree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
              <Table.Cell>Strongly Agree</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support lower minimum sentences for non-violent drug offenders in order to reduce prison overcrowding.</Table.Cell>
              <Table.Cell>Somewhat Agree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
              <Table.Cell>Strongly Agree</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell colSpan='3'>
                <Label color='light grey' ribbon>BUDGET</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support increasing taxes if it is necessary, in order to balance the budget.</Table.Cell>
              <Table.Cell>Disagree</Table.Cell>
              <Table.Cell>Somewhat Agree</Table.Cell>
              <Table.Cell>Strongly Agree</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support decreasing defense spending in order to balance the budget.</Table.Cell>
              <Table.Cell>Somewhat Agree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>I support taxing the wealthiest people at a higher rate.</Table.Cell>
              <Table.Cell>Agree</Table.Cell>
              <Table.Cell>Somewhat Agree</Table.Cell>
              <Table.Cell>Strongly Agree</Table.Cell>
            </Table.Row>

          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>

        <div className ="ui inverted light grey segment">
              <Link
              to="/candilogin"
                onClick={this.handleClick}
                className="ui inverted large button fluid">Save This Survey
              </Link>
        </div>

      </Container>
    </div>
  }
}

export default UserPage

