import React, { useState, useEffect } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return (
        <>
            <div className="login">
                <h3 className="title">Register</h3>
                <form className="register" onSubmit={async (e) => {
                    try {
                        e.preventDefault();
                        console.log("USERNAME ", username)
                        const token = await registerUser(username, password);
                        localStorage.setItem("token", token);
                        navigate("/")
                    } catch (error) {
                        console.error(error);
                    }
                }}>
                    <input value={username} type="text" placeholder="username" minLength={3} onChange={(e) => setUsername(e.target.value)}></input>
                    <input value={password} type="password" placeholder="password" minLength={8} onChange={(e) => setPassword(e.target.value)}></input>
                    {/* <input  type="password" placeholder="retype password" minLength={3}></input> */}
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    );

}

export default Register;