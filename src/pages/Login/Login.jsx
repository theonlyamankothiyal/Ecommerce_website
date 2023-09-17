import React, { useState } from 'react'
import "./LoginStyle.css";
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../router/keys';
import { useSelector } from 'react-redux';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {user} = useSelector(state => state.bag);
    console.log(user)

    

  const handleSignup = () => {
    navigate('/signup');
  };



    const loginHandle = () =>{
        if(user.email === email && user.password===password){
            navigate(HOME)
        }
        else{
            alert("User is not in the record")
        }
    }
  return (
    <div className='Login'>
        <center><h1>Wellcome To Bag Street</h1>
            <h1>LogIn/SignIn</h1>
            </center>
            
            <form /* onSubmit={handle} */>
                <div class="form-group">
                    <label>Email address:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        class="form-control" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>

                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                </div>
                <center> <button type="Login" value={Login} onClick={loginHandle} class="btn btn-primary" >LogIn</button>
                </center>
                
                
            </form>
            <center><button type="Signup" onClick={handleSignup} class="btn btn-success" >SignUp</button></center>
            

        </div>
  )
}

export default Login