import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button,Form } from 'react-bootstrap/';


export class UpdateForm extends Component {
    render() {
        return (
            <div>
                 <Modal
                     show={this.props.show}
                    onHide={this.props.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.props.updateData}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='strDrink' defaultValue={this.props.strDrink}/>
                            <Form.Label>ImgURL</Form.Label>
                            <Form.Control type="text" name='strDrinkThumb' defaultValue={this.props.strDrinkThumb} />
                            <Form.Label>Level</Form.Label>
                            <Form.Control type="text" name='idDrink' defaultValue={this.props.idDrink}/>
                        </Form.Group>
                        <Button type='submit' variant="primary">Save</Button>
                    </Form>
                    </Modal.Body>
                </Modal>
                
            </div>
        )
    }
}

export default UpdateForm
