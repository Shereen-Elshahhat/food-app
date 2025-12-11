import React from "react";
import logo from "../../../assets/images/logo-img.png";


const Verify=()=>{
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
                                       <h4 className="">verify password</h4>
                                       <p className="text-muted">Welcome Back! Please enter your details</p>
                                   </div>
                                   <form>
                                     <div class="input-group mb-3 mt-2">
                                         <span class="input-group-text" id="basic-addon1"><i class="fa fa-user text-muted"></i></span>
                                         <input type="text" class="form-control" placeholder="Enter your email" aria-label="Username" aria-describedby="basic-addon1"/>
                                     </div>
                                     <div class="input-group mb-3">
                                         <span class="input-group-text" id="basic-addon1"><i class="fa fa-user text-muted"></i></span>
                                         <input type="text" class="form-control" placeholder="OTP" aria-label="Username" aria-describedby="basic-addon1"/>
                                     </div>
                                     <button className="btn btn-success text-white w-100">Send</button>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>                
                </div>
               </>

    )
}

export default Verify;