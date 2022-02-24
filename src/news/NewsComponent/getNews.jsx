import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
export default class GetNews extends React.Component {
    render() {
        return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            <br/>{this.props.author} - {this.props.published}<br/><br/>{this.props.description}
            </Card.Text>
            <Button href={this.props.url} variant="primary">Read More</Button>
        </Card.Body>
        </Card>
        )
    }
}