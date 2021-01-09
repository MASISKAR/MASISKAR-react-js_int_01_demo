import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import {register} from '../../../store/userActions';
import styles from './registerStyle.module.css';

function Register(props) {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        surname: ''
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null,
        confirmPassword: null
    });

    const handleSubmit = () => {
        const {email, password, confirmPassword} = values;
        let valid = true;

            let passwordMessage = null;
        if(!confirmPassword){
            passwordMessage = 'Password is required';
            valid = false;
        }
        else if(password !== confirmPassword){
                passwordMessage = "Passwords didn't match";
                valid = false;
            }

        setErrors({
            email: email ? null : 'Email is required',
            confirmPassword: passwordMessage,
            password: password ? null : 'Password is required'
        });

        if(valid){
            console.log(values);
            props.register(values);
        }

    
    };

    const handleChange = ({ target: { name, value } }) => {
        setValues({
            ...values,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: null
        });

    };

    const {registerSuccess, history} = props;
    useEffect(()=>{
        if(registerSuccess){
            history.push('/login');
        }

    }, [registerSuccess]);

    return (

        <div className={styles.main}>
            <Container>

                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6}>
                        <Form>
                            <h3 className={styles.heading}>Register</h3>
                            <Form.Group>
                            <Form.Control
                            // className={errors.email? styles.invalid: ''}
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Control
                        // className={errors.email? styles.invalid: ''}
                        type="text"
                        name="surname"
                        placeholder="Enter your surname"
                        value={values.surname}
                        onChange={handleChange}
                    />
                    </Form.Group>
                    <Form.Group>
                                <Form.Control
                                    className={errors.email? styles.invalid: ''}
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {
                                    <Form.Text className="text-danger" >
                                    {errors.email}
                                </Form.Text>
                                }
                               
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    className={errors.password? styles.invalid: ''}
                                    type="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    name="password"
                                />
                                {
                                    <Form.Text className="text-danger">
                                    {errors.password}
                                </Form.Text>
                                }
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                className={errors.confirmPassword? styles.invalid: ''}
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    name="confirmPassword"
                                />
                                <Form.Text className="text-danger">
                                    {errors.confirmPassword}
                                </Form.Text>
                            </Form.Group>

                            <div className={styles.submitContainer}>
                                <Button
                                    variant="primary"
                                    onClick={handleSubmit}
                                >
                                    Register
                            </Button>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

const mapStateToProps = (state)=>{
return {
    registerSuccess: state.authReducer.registerSuccess
};
};

const mapDispatchToProps = {
    register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);



// function Register() {
//     const [values, setValues] = useState({
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });


//     const handleSubmit = (event) => {
//         // event.preventDefault();

// console.log(values);
//     };

//     const handleChange = ({ target: { name, value } }) => {
//         setValues({
//             ...values,
//             [name]: value
//         });

//     };

//     return (
//         <div>
//             <form action="http://localhost:3001/contact" method='POST'>
//                 <input
//                     value={values.email}
//                     onChange={handleChange}
//                     type="email"
//                     name="email"
//                 />
//                 <input
//                     value={values.password}
//                     onChange={handleChange}
//                     type="password"
//                     name="password"
//                 />
//                 <input
//                     value={values.confirmPassword}
//                     onChange={handleChange}
//                     type="password"
//                     name="confirmPassword"
//                 />
//                 <input
//                     type="submit"
//                     onClick={handleSubmit}
//                 />
//             </form>


//         </div>
//     );
// }