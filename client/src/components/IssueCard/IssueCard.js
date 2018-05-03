import React from 'react'
import { Card } from 'semantic-ui-react'

const IssueCard = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>ISSUE A</Card.Header>
        <Card.Meta>I-A: Q1</Card.Meta>
        <Card.Meta>I-A: Q2</Card.Meta>
        <Card.Meta>I-A: Q3</Card.Meta>
        <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header content='Jake Smith' />
        <Card.Meta content='Musicians' />
        <Card.Description content='Jake is a drummer living in New York.' />
      </Card.Content>
    </Card>

    <Card>
      <Card.Content
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a music producer living in Chicago.'
      />
    </Card>  
  </Card.Group>
)

export default IssueCard;