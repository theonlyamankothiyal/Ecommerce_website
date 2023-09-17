import React from 'react'
import "./SignupStyle.css";
import { useNavigate } from 'react-router-dom';
import { DEFAULT } from '../../router/keys';

const SignUp = () => {

    const navigate = useNavigate();

    const SignupHandle = () => {
        navigate(DEFAULT)

    }
    return (
        <div className='signup'>
            <center><h1>It's Bag Street</h1>
                <h1>SignIn</h1>
            </center>
            
            <form /* onSubmit={handle} */>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>


                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username"/>
                    </div>
                </div>
               
                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                    <select class="form-select" id="autoSizingSelect">
                        <option selected>Sex</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                </div>


                <div class="form-group">
                    <label>Email address:</label>
                    <input type="email"
                        class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div class="form-group">
                    <label>Set Password:</label>
                    <input type="password"
                        class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <center> <button type="Signup" value={SignUp} onClick={SignupHandle} class="btn btn-primary" >SignUp</button>
                </center>


            </form>
        </div>
    )
}


export default SignUp