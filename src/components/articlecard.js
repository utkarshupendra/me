import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class ArticleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnail: props.thumbnail,
            link: props.link,
            title: props.title,
            text: props.text
        };
    }

    goToLink(link) {
        window.open(link, "_blank");
    }

    render() {
        return (<Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={this.state.thumbnail} />
            <Card.Body>
                <Card.Title>{this.state.title}</Card.Title>
                <Card.Text>{this.state.text}</Card.Text>
                <Button variant="primary" onClick={() => this.goToLink(this.state.link)}>Go to Article</Button>
            </Card.Body>
        </Card>);
        }
    }