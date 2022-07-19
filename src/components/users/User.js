import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


const User = () =>  {
    
    const [user, setUser] = useState({
      username: "",
      name: "",
      email: "",
      // phone: "",
      // website: "",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
const res  = await axios.get(`http://localhost:3005/users/${id}`);
setUser(res.data);
    };


    
    
    

return(
    <div className="container py-4">
        <Link className="btn btn-primary" to="/">back to home 
        </Link>
        <h1 className="display-4">user Id: {id}</h1>
        <hr />
        <ul className="list-roup w-50">
           <li className="list-group-item">name: {user.name}</li>
           <li className="list-group-item">user name: {user.username}</li>
           <li className="list-group-item">email: {user.email}</li>


        </ul>
    </div>
);

};
 
export default User