import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import sma from '../assets/sma.png'
import Button from '../elements/Button';

const validate = values => {
    const errors = {};

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Your password must be at least 8 characters';
    }

    if (!values.username) {
        errors.username = 'Required';
    } 
    return errors;
};

const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
        username: '',
        password: '',
        },
        
        validate,
        onSubmit: values => {
            if(values.username == "admin" && values.password == "admin123"){
                // alert(JSON.stringify(values, null, 2));
                // console.log(email);
                navigate('/menuAdmin', {replace:true})
            }else{
                
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
                        <label htmlFor='username' className='me-4 ' >Username</label>
                        <input
                            id='username'
                            name='username'
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

                <div className='d-flex justify-content-end col-12 p-3 gap-4 mt-4'>
                    <Button
                        text={'Login'}
                        type={'submit'}
                    />
                    <Button
                        text={'Cancel'}
                        type={'button'}
                    />
                </div>
                </form>
            </div>
        </div>
    );
};
export default Login