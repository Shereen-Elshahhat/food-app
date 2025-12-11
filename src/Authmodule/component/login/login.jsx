import React from "react";
import logo from "../../../assets/images/logo-img.png";
import { Link ,useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {  toast } from 'react-toastify';



const Login=()=>{
    let {register,formState:{errors},handleSubmit} = useForm()
    let navigate = useNavigate()

    const onSubmit=async(data)=>{
        try {
            let response=await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Login',data);
            console.log(response)
            toast.success('a7laa login alenaaaa',{
                position:"top-center",
                autoClose:3000,
                theme:"colored"
            })
            navigate('/register')

        } catch (error) {
            toast.error(error.response.data.message ,{
                position:"top-center",
                autoClose:3000,
                theme:"colored"
            });
        }
    }

    return(
        <>
         <div className="auth-container bg-success">
            <div className="container-fluid bg-overlay">
                <div className="row  min-vh-100 justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-7 bg-white p-4 rounded-3">
                        <div className="form-container">
                            <div className="logo-container text-center">
                                <img className="w-50" src={logo} alt=""/>
                            </div>
                            <div className="tittle">
                                <h4 className="">Log In</h4>
                                <p className="text-muted">Welcome Back! Please enter your details</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="input-group mb-3">
                                   <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                                   <input type="text" {...register('email',
                                    {
                                        required:"email is required",
                                        pattern:{
                                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "email should be invalid"
                                        }
                                    })}  
                                    class="form-control" placeholder="Enter your E-mail" aria-label="Username" aria-describedby="basic-addon1"/>
                                    
                                </div>
                                {errors.email&&<div className="alert alert-danger">{errors.email.message}</div>}
                                <div class="input-group mb-3">
                                   <span class="input-group-text" id="basic-addon1"><i class="fa fa-key"></i></span>
                                   <input type="text" {...register('password',
                                    {
                                        required: "password is required"
                                    })} 
                                   class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                {errors.password&&<div className="alert alert-danger">{errors.password.message}</div>}
                                <div className="links d-flex justify-content-between my-3">
                                    <Link to='/register' className="text-black text-decoration-none" >Registr Now!</Link>
                                    <Link to='/forgetpass' className="text-success text-decoration-none" >forget password!</Link>
                                </div>
                                <button className="btn btn-success text-white w-100">Login</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>                
         </div>
        </>

    )
}

export default Login;