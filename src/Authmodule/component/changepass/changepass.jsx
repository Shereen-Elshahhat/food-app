import React from "react";

const Changepass=()=>{
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
                                        <h4 className="">Change password</h4>
                                        <p className="text-muted">Welcome Back! Please enter your details</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>                
                 </div>
                </>

    )
}

export default Changepass;