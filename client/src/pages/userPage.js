import React, { Component } from 'react'
import { Icon, Label, Menu, Container, Table } from 'semantic-ui-react'

const UserPage = () => (

  <div>
    <Container>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={10}>Question</Table.HeaderCell>
            <Table.HeaderCell width={2} textAlign='center'>My Answers</Table.HeaderCell>
            <Table.HeaderCell width={2} textAlign='center'>Candidate-1 Answers</Table.HeaderCell>
            <Table.HeaderCell width={2} textAlign='center'>Candidate-2 Answers</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          <Table.Row>
            <Table.Cell colSpan='3'>
              <Label ribbon>Issue 'A'</Label>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question A-1</Table.Cell>
            <Table.Cell>My_Ans-A1</Table.Cell>
            <Table.Cell>Cand1_Ans-A1</Table.Cell>
            <Table.Cell>Cand2_Ans-A1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question A-2</Table.Cell>
            <Table.Cell>My_Ans-A2</Table.Cell>
            <Table.Cell>Cand1_Ans-A2</Table.Cell>
            <Table.Cell>Cand2_Ans-A2</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question A-3</Table.Cell>
            <Table.Cell>My_Ans-A3</Table.Cell>
            <Table.Cell>Cand1_Ans-A3</Table.Cell>
            <Table.Cell>Cand2_Ans-A3</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell colSpan='3'>
              <Label ribbon>Issue 'B'</Label>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question B-1</Table.Cell>
            <Table.Cell>My_Ans-B1</Table.Cell>
            <Table.Cell>Cand1_Ans-B1</Table.Cell>
            <Table.Cell>Cand2_Ans-B1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question B-2</Table.Cell>
            <Table.Cell>My_Ans-B2</Table.Cell>
            <Table.Cell>Cand1_Ans-B2</Table.Cell>
            <Table.Cell>Cand2_Ans-B2</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question B-3</Table.Cell>
            <Table.Cell>My_Ans-B3</Table.Cell>
            <Table.Cell>Cand1_Ans-B3</Table.Cell>
            <Table.Cell>Cand2_Ans-B3</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell colSpan='3'>
              <Label ribbon>Issue 'C'</Label>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question C-1</Table.Cell>
            <Table.Cell>My_Ans-C1</Table.Cell>
            <Table.Cell>Cand1_Ans-C1</Table.Cell>
            <Table.Cell>Cand2_Ans-C1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question C-2</Table.Cell>
            <Table.Cell>My_Ans-C2</Table.Cell>
            <Table.Cell>Cand1_Ans-C2</Table.Cell>
            <Table.Cell>Cand2_Ans-C2</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Question C-3</Table.Cell>
            <Table.Cell>My_Ans-C3</Table.Cell>
            <Table.Cell>Cand1_Ans-C3</Table.Cell>
            <Table.Cell>Cand2_Ans-C3</Table.Cell>
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
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>

  </div>
);

export default UserPage