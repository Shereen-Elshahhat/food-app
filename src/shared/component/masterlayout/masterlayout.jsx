import React from "react";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../Navbar/navbar";
import { Outlet } from "react-router-dom";

const Masterlayout=()=>{
    return(
        <div className="d-flex vh-100">
            <div className="">
                <Sidebar/>
            </div>
            <div className="w-100">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
           
    )
}

export default Masterlayout;