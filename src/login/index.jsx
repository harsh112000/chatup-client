import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './index.scss';

function Login (props) {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const submitData = async(evt) => {
        if(evt && evt.preventDefault) {
            evt.preventDefault()
        }

        const formData = new FormData(evt.target);

        const data = {}
        for(const [key, value] of formData) {
            data[key]= value;
        }

        try {

            const {data: {isLoggedIn}} = await axios.post("http://localhost:3001/login", data);

            if(isLoggedIn) {

                localStorage.setItem('isLoggedIn', isLoggedIn);
                localStorage.setItem('userName', data.userName);
                //window.location.href = "/chat?userName="+data.userName
                navigate("/chat", {state: {data}})
                return true
            }

        }
        catch(err) {
            const {response :{data : {isLoggedIn, errors}}} = err;

            localStorage.setItem('isLoggedIn', isLoggedIn )
            setErrors(errors)
            //window.location.href = "/chat"
            return true
        }


        //return redirect("http://localhost:3000/chat")
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={submitData}>
                    <input type="text" name="userName" className="input" placeholder="Username" required />
                    <input type="password" name="password"  className="input" placeholder="Password" required />
                    <div align="center">
                        <div id="error">{errors.map((i, idx)=> {
                            return <p key={idx}>{i.messages}</p>
                            })}</div>
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>   
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;