import React from 'react'

import {useEffect, useState} from 'react'
import axios from 'axios';
const baseUrl ="http://127.0.0.1:8000/api/"
const InstructorCourses = () => {
    const [courseData, setCourseData] = useState([]);
  
    //Fetch course when page loads
    useEffect(()=>{
      document.title = "courses";
      try{
        axios.get(baseUrl + "teacher-courses/3")
        .then((res)=>{
          setCourseData(res.data);
        });
      }catch(error){
        console.log(error)
      }
   
    },[])
    console.log(courseData);
  return (
    <>
    <div class="wrapper">
      <div class="sa4d25">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="st_title">
                <i class="uil uil-file-alt"></i> My Courses
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <ul class="more_options_tt">
                <li>
                  <button class="more_items_14 active">This Cohort</button>
                </li>
                <li><button class="more_items_14">Last Cohort</button></li>
                <li>
                  <div class="explore_search">
                    <div class="ui search focus">
                      <div class="ui left icon input swdh11 swdh15">
                        <input
                          class="prompt srch_explore"
                          type="text"
                          placeholder="Document Number"
                        />
                        <i class="uil uil-search-alt icon icon8"></i>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="table-responsive mt-30">
                <table class="table ucp-table earning__table">
                  <thead class="thead-s">
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Enrolled students</th>
                      <th scope="col">Action</th>
                      
                     
                    </tr>
                  </thead>
                  <tbody>
                  { courseData.map((course,index)=> 
                    <tr key={index}>
                      <td>13 Apr 2020</td>
                      <td>{course.title}</td>
                      <td>{course.category}</td>
                      <td><a href="#">126</a></td>
                      <td> <button class="more_items_14 active">Add topic</button>  <button class="more_items_14 btn-danger">Delete</button></td>
                    </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default InstructorCourses