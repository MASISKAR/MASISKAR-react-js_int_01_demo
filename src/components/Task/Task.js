import React, { PureComponent } from 'react';
import { Card, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './task.module.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {removeTask} from '../../store/actions';
import {formatDate, shortStr} from '../../helpers/utils';
import PropTypes from 'prop-types';

class Task extends PureComponent {
    state = {
        checked: false
    };

    
   toggleCheckbox = () => {
        this.setState({
            checked: !this.state.checked
        });

        this.props.onCheck();
    };

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        const { data, removeTask, onEdit, disabled } = this.props;
        const { checked } = this.state;

        const cardClasses = ['card', styles.task];
        if (checked) {
            cardClasses.push(styles.checked);
        }

        return (
            <Card
                className={cardClasses.join(' ')}
            >
                {/* className={`card ${styles.task} ${checked ? styles.checked : ''}`} */}
                <input
                    type='checkbox'
                    className={styles.checkbox}
                    onClick={this.toggleCheckbox}
                />
                <Card.Body>
                    {disabled ?
                        <Card.Title>{data.title}</Card.Title> :
                        
                        <Link to={`/task/${data._id}`} >
                            <Card.Title>{data.title}</Card.Title>
                        </Link>
                    }


                    <Card.Text>
                        Description: {shortStr(data.description, 25)}
                    </Card.Text>
                    <Card.Text>
                        Date: {formatDate(data.date)}
                    </Card.Text>
                    <Card.Text>
                        Created: {formatDate(data.created_at)}
                    </Card.Text>

                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip>
                                <strong>Edit</strong>
                            </Tooltip>
                        }
                    >
                        <Button
                            title='Edit'
                            className='m-1'
                            variant="info"
                            onClick={onEdit}
                            disabled={disabled}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </OverlayTrigger>


                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip>
                                <strong>Remove</strong>
                            </Tooltip>
                        }
                    >
                        <Button
                            title='Remove'
                            className='m-1'
                            variant="danger"
                            onClick={()=> removeTask(data._id)}
                            disabled={disabled}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </OverlayTrigger>
                </Card.Body>
            </Card>
        );
    }
}

Task.propTypes = {
    data: PropTypes.object.isRequired,
    onCheck: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

const mapDispatchToProps = {
    removeTask
};

export default connect(null, mapDispatchToProps)(Task);