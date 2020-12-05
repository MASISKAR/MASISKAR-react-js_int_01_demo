import React, { PureComponent } from 'react';
import { FormControl, Button, Modal, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import {addTask} from '../../store/actions';
import styles from './newTask.module.css';

class NewTask extends PureComponent {
    state = {
        title: '',
        description: '',
        date: new Date(),
        valid: true,
        validationType: null
    };

    validationErrors = {
        requiredError: 'The field is required!',
        lengthError: 'The Title length shoud be less than 50 characters'
    };

    handleChange = (type, value) => {
        if (type === 'title' && !this.state.valid) {
            this.setState({
                [type]: value,
                valid: true
            });
            return;
        }

        this.setState({
            [type]: value
        });
    };

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleSave();
        }
    };

    handleSave = () => {

        let { title, description, date } = this.state;
        title = title.trim();

        if (!title) {
            this.setState({
                valid: false,
                validationType: 'requiredError'
            });
            return;
        };

        if(title.length > 50){
            this.setState({
                valid: false,
                validationType: 'lengthError'
            });
            return;
        }

        const data = {
            title,
            description,
            date: date.toISOString().slice(0, 10)
        };

        this.props.addTask(data);

    }

    render() {
        const { valid, validationType } = this.state;

        let errorMessage = '';
if(!valid){
    errorMessage = this.validationErrors[validationType];
}

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
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className={"text-danger"}>{errorMessage}</Form.Label>
                        <FormControl
                            className={!valid ? styles.invalid : null}
                            value={this.state.title}
                            onChange={(event) => this.handleChange('title', event.target.value)}
                            onKeyDown={this.handleKeyDown}
                            placeholder="Title"
                            aria-label="Title"
                            aria-describedby="basic-addon2"
                        />
                    </Form.Group>

                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Description"
                        className="my-3"
                        onChange={(event) => this.handleChange('description', event.target.value)}
                    />
                    <div
                        className={styles.datePicker}
                    >
                        <DatePicker
                            selected={this.state.date}
                            minDate={new Date()}
                            onChange={(value) => this.handleChange('date', value)}
                        />
                    </div>

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
    addTask: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    addTask: addTask
};


export default connect(null, mapDispatchToProps)(NewTask);
