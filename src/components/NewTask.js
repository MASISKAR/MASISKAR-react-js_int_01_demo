import React, { PureComponent } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

class NewTask extends PureComponent {
    state = {
        title: '',
        description: '',
        date: ''
    };

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleSave();
        }
    };

    handleSave = () => {

        const { title } = this.state;
        if (title) {
            this.props.onAdd(title);
        }
    }

    render() {

        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.props.onCancel}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new task
               </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        value={this.state.title}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        placeholder="Input task"
                        aria-label="Input task"
                        aria-describedby="basic-addon2"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSave} variant='success'>Add</Button>
                    <Button onClick={this.props.onCancel} variant='secondary'>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }


}


NewTask.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default NewTask;
