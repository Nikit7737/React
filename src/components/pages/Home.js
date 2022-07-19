import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUser();

    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3005/users`);
        setUsers(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3005/users/${id}`);
        loadUser();
 };




    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
                <table class="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Users name</th>
                            <th scope="col">Emails</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/users/${users.id}`}><i class="fa fa-eye" aria-hidden="true"></i>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/users/Edit/${users.id}`}>Edit</Link>
                                    <Link className="btn btn-danger m-2" onClick={() => deleteUser(users.id)}>delete</Link>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>


            </div>

        </div>
    );
};

export default Home;