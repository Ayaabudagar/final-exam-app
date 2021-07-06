import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap/';

export class Drinks extends Component {
    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                <Card key={this.props.index}  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.drink. strDrinkThumb} />
                    <Card.Body>
                        <Card.Title> {this.props.drink.strDrink} </Card.Title>
                        <Card.Text>
                           {this.props.drink. idDrink}
                        </Card.Text>
                        <Button onClick = {() => this.props.addToFav(this.props.drink)} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Drinks
