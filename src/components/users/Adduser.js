// import React from "react";
import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'



const AddUser = () => {
  let history = useHistory();
  const [users, setUser] = useState({
    username: "",
    name: "",
    email: "",
    // phone: "",
    // website: "",
  });

  const { username, name, email } = users;
  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...users, [e.target.name]: e.target.value });

  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:3005/users`, users)
    history.push("/");
  };



  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-">
        <h1>Add users</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />

          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              placeholder="enter"
              onChange={(e) => onInputChange(e)}
            />

          </div>



          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">ADD</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>
      </div>
    </div>


  );
}

export default AddUser;