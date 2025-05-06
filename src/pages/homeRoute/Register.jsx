import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container border bg-white  d-flex w-50 py-5">
        <div className="w-50">
          <img src="/login.jpg" alt="" className="w-100" />
        </div>
        <div className="w-50 px-5">
          <h2 className="text-center">Create an Account</h2>
          <form>
            <div>
              <h5>Full Name</h5>
              <input type="text" className="w-100 p-1" placeholder="John Doe" />
            </div>
            <div className="py-3">
              <h5>Email</h5>
              <input
                type="text"
                className="w-100 p-1"
                placeholder="exmaple@gmail.com"
              />
            </div>
            <div>
              <h5>Password</h5>
              <input
                className="w-100 p-1"
                type="text"
                placeholder="*********"
              />
            </div>
            <button className="btn btn-primary mt-3">Signup</button>
          </form>
          <p className="pt-3 d-flex gap-2">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
