import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const baseUrl = "http://127.0.0.1:8000/api/"
const InstructorLogin = () => {
    const [InstructorLoginData, setInstructorLoginData] = useState({
        'email':'',
        'password':''
    });

    // handle event change
    const handleChange=(event)=>{
        setInstructorLoginData({
            ...InstructorLoginData, [event.target.name]: event.target.value
        });
        console.log(InstructorLoginData);
    }

    // submit form
    const submitForm=(event)=>{
        event.preventDefault();
       const instructorFormData = new FormData();
       instructorFormData.append('email',InstructorLoginData.email);
       instructorFormData.append('password',InstructorLoginData.password);
       
       try{
        axios.post(baseUrl + 'teacher-login', instructorFormData)
        .then(response=>{
           if (response.data.bool = true){
            localStorage.setItem('InstructorLoginStatus',true);
            window.location.href="instructor-dashboard"
           }
        });
       }catch(error){
         console.log(error)
       }
    }
    const InstructorLoginStatus = localStorage.getItem('InstuctorLoginStatus');
    if (InstructorLoginStatus == 'true'){
        window.location.href="instructor-dashboard";
    }
  return (
    <>
    <div class="sign_in_up_bg">
    <div class="container">
      <div class="row justify-content-lg-center justify-content-md-center">
       
          <div class="col-lg-6 col-md-8 pt-5">
              <div class="sign_form">
                  <h2>Welcome to EAIHM E-LEARNING PORTAL</h2>
                  <p>Login</p>
                  <form>
                     {/* {instructordata.status =="success" && <p className='text-success'>Thank you for registering</p>}
                     {instructordata.status =="error" && <p className='text-danger'>Something went wrong </p>} */}

                      <div class="ui search focus mt-15">
                          <div class="ui left icon input swdh11 swdh19">
                              <input onChange={handleChange} class="prompt srch_explore" type="email" name="email" 
                                 value={InstructorLoginData.email}  id="email" required="" maxlength="64" placeholder="Email Address"/>
                          </div>
                      </div>
                      <div class="ui search focus mt-15">
                          <div class="ui left icon input swdh11 swdh19">
                              <input onChange={handleChange}  class="prompt srch_explore" type="password" name="password" 
                                 value={InstructorLoginData.password}  id="password" required="" maxlength="64" placeholder="Create Password"/>
                          </div>
                      </div>
                      <button onClick={submitForm} class="login-btn" type="submit">Login</button>
                  </form>
                  <p class="mb-0 mt-30">Already have an account? <Link to="instructor-register">Sign up</Link></p>
              </div>
          </div>
      </div>
  </div>
</div>
</>

  )
}

export default InstructorLogin




