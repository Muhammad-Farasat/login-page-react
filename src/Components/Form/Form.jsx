import React from "react";
import "./Form.css";
function Form() {
  return (
    <>
      <div className="form d-flex flex-column justify-content-center align-items-center mt-4">
        <div className="inputs d-flex flex-column">
          <input type="email" placeholder="Login" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="rem-in d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex align-items-center">
            <input type="checkbox" name="me" id="me" className="check" />
            <label htmlFor="me">Remember me</label>
          </div>
          <div className="pass-text">
            <a className="mb-0 icon-link-hover">Forgot Password?</a>
          </div>
        </div>
        <div className="btn mt-3">
          <button className="shadow">Login</button>
        </div>
      </div>
    </>
  );
}

export default Form;
