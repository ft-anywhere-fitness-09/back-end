import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchSuccess} from '../actions'

const Login = (props) => {
    const initatate =   {  
        username: '',
        password: '',
        role: ''
    }
    const [value, setValue] = useState(initatate)
    const {push} = useHistory()
    const {fetchSuccess} = props

    const handleChange = (e) => {
        setValue({ 
           
               ...value,
               [e.target.name]: e.target.value
            
        })
    }
  
    // console.log(value)
    const login = e => {
        e.preventDefault();
        // console.log("login")
        axios.post('http://localhost:9000/api/auth/login', value)
        .then(resp=> {
        //   console.log(resp);
          const { token } = resp.data;
          localStorage.setItem("token", token);
          fetchSuccess()
          props.history.push('/users');
        })
        .catch(err => {
          console.log(err);
        })
    }


    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={value.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />

        <label> Role:
            <select name="role" onChange={handleChange}>
                <option value="">---Select your role---</option>
                <option value="instructor">Instructor</option>
                <option value="client">Client</option>
            </select>
        </label>

          <button>Log in</button>
        </form>
      </div>
    );
}
export default connect(null,{ fetchSuccess})(Login);