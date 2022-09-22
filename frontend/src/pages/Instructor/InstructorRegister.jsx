import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
const baseUrl ='http://127.0.0.1:8000/api/teacher'
const InstructorRegister = () => {
    useEffect(()=>{
        document.title = 'Instructor register';
      })
      const [instructordata, setInstructorData] =useState({
        'fullname': '',
        'email':'',
        'password':'',
        'qualification':'',
        'mobile':'',
        'skills':'',
        'status':''
      });
      //Change element value
      const handleChange =(event)=>{
        setInstructorData({
          ...instructordata, [event.target.name]:event.target.value
        })
      }
      // End
     console.log()
      // Submit form
      const submitForm =(event)=>{
        event.preventDefault();
        const instructorFormData = new FormData();
        instructorFormData.append('fullname',instructordata.fullname)
        instructorFormData.append('email',instructordata.email)
        instructorFormData.append('password',instructordata.password)
        instructorFormData.append('qualification',instructordata.qualification)
        instructorFormData.append('mobile',instructordata.mobile)
        instructorFormData.append('skills',instructordata.skills)
    
        try{
          axios.post(baseUrl,instructorFormData).then((response)=>{
            console.log(response.data);
              setInstructorData({
              'fullname': '',
              'email':'',
              'password':'',
              'qualification':'',
              'mobile':'',
              'skills':'',
              'status':'success'
            })
    
          })
        }catch(error){
          console.log(error);
          setInstructorData({'status':'error'})
        }
      }
      // end 
      // When user is logged in
      const InstructorLoginStatus = localStorage.getItem('InstuctorLoginStatus');
      if (InstructorLoginStatus == 'true'){
          window.location.href="instructor-dashboard"
      }
  return (
    <>
          <div class="sign_in_up_bg">
        <div class="container">
            <div class="row justify-content-lg-center justify-content-md-center">
             
                <div class="col-lg-6 col-md-8 pt-5">
                    <div class="sign_form">
                        <h2>Welcome to EAIHM E-LEARNING PORTAL</h2>
                        <p>Sign Up and create a course</p>
                        <form>
                           {instructordata.status =="success" && <p className='text-success'>Thank you for registering</p>}
                           {instructordata.status =="error" && <p className='text-danger'>Something went wrong </p>}
                            <div class="ui search focus">
                                <div class="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange} class="prompt srch_explore" type="text" name="fullname" 
                                      value={instructordata.fullname}  id="fullname" required="" maxlength="64" placeholder="Full Name"/>
                                </div>
                            </div>
                            <div class="ui search focus mt-15">
                                <div class="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange} class="prompt srch_explore" type="email" name="email" 
                                       value={instructordata.email}  id="email" required="" maxlength="64" placeholder="Email Address"/>
                                </div>
                            </div>
                            <div class="ui search focus mt-15">
                                <div class="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange} class="prompt srch_explore" type="number" name="mobile" 
                                       value={instructordata.mobile}  id="phone" required="" maxlength="12" placeholder="Phone number"/>
                                </div>
                            </div>

                            <div class="ui search focus mt-15">
                                <div class="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange}  class="prompt srch_explore" type="text" name="qualification" 
                                      value={instructordata.qualification}   id="qualification" required="" maxlength="64" placeholder="Level of Education"/>
                                </div>
                            </div>
                            <div class="ui search focus mt-15">
                                <div class="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange}  class="prompt srch_explore" type="text" name="skills" 
                                       value={instructordata.skills}  id="skill" required="" placeholder="Skills"/>
                                </div>
                            </div>
                            <div class="ui search focus mt-15">
                                <div class="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange}  class="prompt srch_explore" type="password" name="password" 
                                       value={instructordata.password}  id="password" required="" maxlength="64" placeholder="Create Password"/>
                                </div>
                            </div>
                            {/* <div class="ui search focus mt-15">
                                <div class="ui left icon input swdh11 swdh19">
                                    <input onChange={handleChange} class="prompt srch_explore" type="password" name="password" 
                                        id="id_password" required="" maxlength="64" placeholder="Confirm Password"/>
                                </div>
                            </div> */}

                            <button onClick={submitForm} class="login-btn" type="submit">Sign up</button>
                        </form>
                        <p class="mb-0 mt-30">Already have an account? <Link to="instructor-login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InstructorRegister