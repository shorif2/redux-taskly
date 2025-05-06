import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex  justify-content-between align-items-center p-3 container">
      <div className="fs-4 fw-semibold">TASKLY</div>
      <div className="d-flex flex-row justify-content-between gap-4 fw-medium">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </div>
      <div className="d-flex justify-content-between gap-2 fw-medium">
        <NavLink to={"/login"} className="btn btn-primary fw-medium">
          Log in
        </NavLink>
        <NavLink to={"/signup"} className="btn btn-danger fw-medium">
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
