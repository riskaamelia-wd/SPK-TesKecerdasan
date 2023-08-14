import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import Input from '../elements/Input';
import sma from '../assets/sma.png'
import Button from '../elements/Button';

const validate = values => {
    const errors = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Your password must be at least 8 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        
        validate,
        onSubmit: values => {
            if(values.email !== "" && values.email !== ""){
                // alert(JSON.stringify(values, null, 2));
                // console.log(email);
                navigate('/menuUtama', {replace:true})
            }
        },
    });

    return (
        <div className='col-12 d-flex' style={{height:'100vh', backgroundColor:'var(--primary)'}}>
            <div className='col-6 col-lg-4 m-auto rounded' style={{backgroundColor:'var(--secondary)'}}>
                <div className='mb-3 col-6 col-lg-4 m-auto'>
                    <img  src={sma} alt="SMA" />
                </div>
                <h1 className='text-center mb-4'>LOGIN</h1>
                <form onSubmit={formik.handleSubmit}>
                {/* <form> */}
                    <div className='d-flex p-3'>
                        <label htmlFor='email' className='me-4 ' >Username</label>
                        <input
                            id='email'
                            name='email'
                            type='text'
                            className='form-control'
                            onChange={formik.handleChange}
                            // value={''}
                        />
                        {formik.errors.email ? <div className='text-danger fw-light '>{formik.errors.email}</div> : null}
                    </div>
                    <div className='mt-3 d-flex p-3'>
                        <label htmlFor='password' className='me-4 '>Password</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            className='form-control'
                            onChange={formik.handleChange}
                            />
                        {formik.errors.password ? <div className='text-danger fw-light'>{formik.errors.password}</div> : null}
                    </div>

                <div className='d-flex col-5 mx-auto  p-3 gap-4 mt-4'>
                    <Button
                        // onClick={navigate('/menuUtama')}
                        text={'Login'}
                    />
                    <Button
                        text={'Cancel'}
                    />
                    {/* <button 
                        className="btn btn-secondary d-grid mx-auto mt-5 mb-3"
                        type="submit"
                    >
                        Login
                    </button>
                    <button 
                        type="submit"
                        className="btn btn-secondary d-grid mx-auto mt-5 mb-3"
                    >
                        cancel
                    </button> */}
                </div>
                </form>
            </div>
        </div>
    );
};
export default Login