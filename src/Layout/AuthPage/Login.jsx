import React, { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../redux/extraReducer";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserLogin({ email: email, password: password }));
  };
  return (
    <div>
      <div class='auth'>
        <form class='form-1' onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p>Glad to see you again!</p>
          <label for='email'>Email*</label>
          <input
            type='email'
            name='email'
            placeholder="your email"
            id='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for='password'>Password*</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder="your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            Are you new here? <a href="/register"><b>Sign up</b></a>{" "}
          </span>
          <button type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
