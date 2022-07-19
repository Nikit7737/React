// import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';



const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    // phone: "",
    // website: "",
  });

  const { username, name, email } = user;
  const onInputChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });

  };
  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3005/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/users/${id}`);
    setUser(result.data);
    // console.log(result);
  
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-">
        <h1>Edit users</h1>
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

export default EditUser;