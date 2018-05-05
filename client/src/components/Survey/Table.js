import React from 'react';
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Table,
} from 'semantic-ui-react';

const Table = () => (
  <Grid container style={{ padding: '5em 0em' }}>
    <Grid.Row>
      <Grid.Column>
        <Header as='h1' dividing>Bootstrap Migration</Header>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as='h1'>Hello, world!</Header>
          <p>
            This is a template for a simple marketing or informational website. It includes a large callout called a
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.
          </p>
          <Button color='blue'>Learn more &raquo;</Button>
        </Message>
      </Grid.Column>
    </Grid.Row>


<Grid.Row>
  <Grid.Column>
    <Header as='h1'>Take the Survey</Header>

      <Grid.Column width={16}>
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
              <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
              <Table.HeaderCell rowSpan='2'>Files</Table.HeaderCell>
              <Table.HeaderCell colSpan='3'>Languages</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Ruby</Table.HeaderCell>
              <Table.HeaderCell>JavaScript</Table.HeaderCell>
              <Table.HeaderCell>Python</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Alpha Team</Table.Cell>
              <Table.Cell>Project 1</Table.Cell>
              <Table.Cell textAlign='right'>2</Table.Cell>
              <Table.Cell textAlign='center'>
                <Icon color='green' name='checkmark' size='large' />
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
              <Table.Cell>Project 1</Table.Cell>
              <Table.Cell textAlign='right'>52</Table.Cell>
              <Table.Cell textAlign='center'>
                <Icon color='green' name='checkmark' size='large' />
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell>Project 2</Table.Cell>
              <Table.Cell textAlign='right'>12</Table.Cell>
              <Table.Cell />
              <Table.Cell textAlign='center'>
                <Icon color='green' name='checkmark' size='large' />
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell>Project 3</Table.Cell>
              <Table.Cell textAlign='right'>21</Table.Cell>
              <Table.Cell textAlign='center'>
                <Icon color='green' name='checkmark' size='large' />
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid>
  </Grid.Column>
</Grid.Row>
</Grid>

export default Table;