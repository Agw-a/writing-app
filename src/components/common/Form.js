import React from "react";
import Button from "./Button";
import NonNav from "./NonNav";

const UserForm = ({ title, setUserEmail, setUserPassword, handleUser }) => {
  return (
    <>
      <NonNav />
      <section className="form-wrapper">
        <form className="form">
          <div>
            <h3> {title} form</h3>
          </div>
          <div>
            <label className="form-label">Email Address</label>

            <input
              className="form-textarea"
              label="Enter Email"
              name="email"
              type={"email"}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </div>

          <div>
            <label className="form-label">Password</label>
            <br></br>
            <input
              className="form-textarea"
              name="password"
              label="Password"
              type={"password"}
              placeholder="Enter password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
        </form>
        <Button title={title} handleUser={handleUser} />
      </section>
    </>
  );
};

export default UserForm;
