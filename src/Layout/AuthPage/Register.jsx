import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserCreate } from "../../redux/extraReducer";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      UserCreate({ userName: userName, email: email, password: password })
    );
  };
  return (
    <div>
      <div class='auth'>
        <form class='form-1' onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p>Welcome to my Dropbox Clone</p>
          <label for='username'>Username*</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder="write a username"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <label for='email'>Email*</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder="write your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for='password'>Password*</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder="write a strong password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            Already on Dropbox? 
            <a href='/'>
              <b>Sign In</b>
            </a>
          </span>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
