import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignUp() {

  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    history.push("/dashboard");
  }

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <button type="submit" className="btn btn-primary btn-block" onClick={handleClick}>Sign Up</button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
}
