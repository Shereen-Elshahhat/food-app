import React from "react";
import logo from "../../../assets/images/logo-img.png";
import { Link ,useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {  toast } from 'react-toastify';


const Register=()=>{
    let {register,formState:{errors},handleSubmit}= useForm()
    let navigate = useNavigate()
    
    const onSubmit=async(data)=>{
        try {
            let response=await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request',data);
            console.log(response)
             toast.success('enter new password',{
                position:"top-center",
                autoClose:3000,
                theme:"colored"
            })
            navigate('/forgetpass')

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
                                        <h4 className="">Register</h4>
                                        <p className="text-muted">Welcome Back! Please enter your details</p>
                                    </div>
                                   
                                    <form  onSubmit={handleSubmit(onSubmit)}>
                                        <div className="d-flex">
                                            <div className="div1">
                                                <div class="input-group mb-2">
                                                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-user text-muted"></i></span>
                                                  <input type="text" {...register('name',
                                                        {
                                                            required:"name is required",
                                                        })}   
                                                        class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>
                                                {errors.name&&<div className="alert alert-danger">{errors.name.message}</div>}

                                                <div class="input-group mb-2">
                                                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-home text-muted"></i></span>
                                                  <input type="text" 
                                                  {...register('country',
                                                         {
                                                            required:"country is required",
                                        
                                                         })}  class="form-control" placeholder="Country" aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>
                                               {errors.country&&<div className="alert alert-danger">{errors.country.message}</div>}

                                                <div class="input-group mb-2">
                                                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-key text-muted"></i></span>
                                                  <input type="text" 
                                                  {...register('password',{
                                                    required:"password is required",
                                                  })}
                                                  class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>
                                               {errors.password&&<div className="alert alert-danger">{errors.password.message}</div>}

                                            </div>
                                            <div>
                                                <div class="input-group mb-2">
                                                 <span class="input-group-text" id="basic-addon1"><i class="fa fa-user text-muted"></i></span>
                                                 <input type="text"  {...register('email',
                                                        {
                                                            required:"email is required",
                                                            pattern:{
                                                                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: "email should be invalid"
                                                            }
                                                        })} 
                                                  class="form-control" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                             {errors.email&&<div className="alert alert-danger">{errors.email.message}</div>}

                                            <div class="input-group mb-2">
                                                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-phone text-muted"></i></span>
                                                  <input type="text" 
                                                  {...register('phone',{
                                                    required:"phone is required",
                                                  })}
                                                  class="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                             {errors.phone&&<div className="alert alert-danger">{errors.phone.message}</div>}

                                             <div class="input-group mb-2">
                                                  <span class="input-group-text" id="basic-addon1"><i class="fa fa-key text-muted"></i></span>
                                                  <input type="text"
                                                  {...register('confirmpass',{
                                                    required:"confirmpass is required",
                                                  })}
                                                   class="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1"/>
                                            </div>
                                             {errors.confirmpass&&<div className="alert alert-danger">{errors.confirmpass.message}</div>}

                                            <div className="text-end">
                                                <Link className="text-success fs-9 text-decoration-none " to='/login'>Login now!</Link>
                                            </div>
                                            </div>
                                        </div>
                                            
                                        <button className="btn btn-success text-white w-100 mt-3">Register</button>
                                    </form>
                                  
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>                
                 </div>
                </>

    )
}

export default Register;