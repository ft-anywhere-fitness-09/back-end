import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchSuccess} from '../actions'

const Signup = (props) => {
    const initatate =   {  
        username: '',
        password: '',
        role_type: ''
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
  
    console.log("siginup ",value)
    const handleSubmit = e => {
        e.preventDefault();
        // console.log("handleSubmit")
        axios.post('http://localhost:9000/api/auth/register', value)
        .then(resp=> {
        //   console.log(resp);
          const { token } = resp.data;
          // localStorage.setItem("token", token);
          // fetchSuccess()
          props.history.push('/users');
        })
        .catch(err => {
          console.log(err);
        })
    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
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
            <select name="role_type" onChange={handleChange}>
                <option value="">---Select your role---</option>
                <option value="instructor">Instructor</option>
                <option value="client">Client</option>
            </select>
        </label>

          <button>Sign up</button>
        </form>
      </div>
    );
}
export default connect(null,{ fetchSuccess})(Signup);