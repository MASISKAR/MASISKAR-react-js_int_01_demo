import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import styles from './registerStyle.module.css';

function Register() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        email: null,
        password: null,
        confirmPassword: null
    });

    const handleSubmit = () => {
        const {email, password, confirmPassword} = values;

            let passwordMessage = null;
        if(!confirmPassword){
            passwordMessage = 'Password is required';
        }
        else if(password !== confirmPassword){
                passwordMessage = "Passwords didn't match"
            }

        setErrors({
            email: email ? null : 'Email is required',
            confirmPassword: passwordMessage,
            password: password ? null : 'Password is required'
        });

        console.log(values);
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

    return (

        <div className={styles.main}>
            <Container>

                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6}>
                        <Form>
                            <h3 className={styles.heading}>Register</h3>
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

export default Register;



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