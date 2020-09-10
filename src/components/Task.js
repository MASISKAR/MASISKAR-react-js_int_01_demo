import React, { Component } from 'react';
import {Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Task(props){
const {data} = props;

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Task</Card.Title>
            <Card.Text>
                {data.text}
            </Card.Text>
            <Button
                variant="danger"
                onClick={props.onRemove(data.id)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </Card.Body>
    </Card>
    );
}

export default Task;