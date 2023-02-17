import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import React from "react";
import { Route, Routes,Outlet ,NavLink } from "react-router-dom";

function Admin() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="container-fluid d-flex" style={{width:"80%",marginLeft:"20%",marginTop:"-700px"}}>
        
        <Outlet/>

      </div>
    </div>
  );
}

export default Admin;