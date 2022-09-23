import React from "react";

import {useEffect,useState} from 'react';
import axios from 'axios';
const baseURL ="http://127.0.0.1:8000/api/"

function CreateCourse() {
  const [category, setCategory] =useState([])
  const [course, setCourse] =useState({
    'category':'',
    'title':'',
    'description':'',
    'thumbnail':'',
    'tags':'',
    'outcomes':'',
    'requirements':''
  })
  const InstructorID = localStorage.getItem('InstructorID');
    useEffect(()=>{
        document.title="Add course";
        //Fetch category from the database
        try{
          axios.get(baseURL + "category/").then((res)=>{
            setCategory(res.data);
          })
        }catch(error){
          console.log(error);
        }
      },[]);

      const handleChange =(event)=>{
            setCourse({
              ...course,[event.target.name]:event.target.value
            });
      }
      const handleFileChange=(event)=>{
            setCourse({
              ...course,[event.target.name]:event.target.files[0]
            })
      }

      const formSubmit =(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('category',course.category);
        formData.append('teacher', InstructorID);
        formData.append('title',course.title);
        formData.append('description',course.description);
        formData.append('thumbnail',course.thumbnail,course.thumbnail.name);
        formData.append('tags',course.tags);
        formData.append('outcomes',course.outcomes);
        formData.append('requirements',course.requirements);

        try{
          axios.post(baseURL + "course/",formData,{
            headers:{
              "content-type":'multipart/form-data'
            }
          }).then((res)=>{
            console.log(res.data);
          });
        }catch(error){
          console.log(error);
        }
      }

  return (
    <>
      <div class="wrapper">
        <div class="sa4d25">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="course_tabs_1">
                  <div id="add-course-tab">
                    <div class="step-content">
                      <div
                        class="step-tab-panel step-tab-info active"
                        id="tab_step1"
                      >
                        <div class="tab-from-content">
                          <div class="title-icon">
                            <h3 class="title">
                              <i class="uil uil-info-circle"></i>Create New Course
                            </h3>
                          </div>
                          <div class="course__form">
                            <div class="general_info10">
                              <form>
                                <div class="row">
                                  <div class="col-lg-12 col-md-12">
                                    <div class="ui search focus mt-30 lbel25">
                                      <label>Course Title*</label>
                                      <div class="ui left icon input swdh19">
                                        <input
                                          class="prompt srch_explore"
                                          type="text"
                                          placeholder="Course title here"
                                          name="title"
                                          data-purpose="edit-course-title"
                                          maxlength="60"
                                          onChange={handleChange} value={course.title}
                                        />
                                        <div class="badge_num">60</div>
                                      </div>
                                      <div class="help-block">
                                        (Please make this a maximum of 100
                                        characters and unique.)
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-12 col-md-12">
                                    <div class="ui search focus lbel25 mt-30">
                                      <label>Course Description*</label>
                                      <div class="ui form swdh30">
                                        <div class="field">
                                          <textarea
                                            rows="3"
                                            name="description"
                                            id=""
                                            placeholder="Item description here..."
                                            onChange={handleChange} value={course.description}
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="help-block">220 words</div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-md-12">
                                    <div class="ui search focus lbel25 mt-30">
                                      <label>
                                        What will students learn in your course?*
                                      </label>
                                      <div class="ui form swdh30">
                                        <div class="field">
                                          <textarea
                                            rows="3"
                                            name="description"
                                            id=""
                                            placeholder=""
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="help-block">
                                        Student will gain this skills, knowledge
                                        after completing this course. (One per
                                        line).
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-md-12">
                                    <div class="ui search focus lbel25 mt-30">
                                      <label>Requirements*</label>
                                      <div class="ui form swdh30">
                                        <div class="field">
                                          <textarea
                                            rows="3"
                                            name="requirements"
                                            id=""
                                            placeholder=""
                                            onChange={handleChange} 
                                            value={course.requirements}
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="help-block">
                                        What knowledge, technology, tools required
                                        by users to start this course. (One per
                                        line).
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-md-12">
                                    <div class="ui search focus lbel25 mt-30">
                                      <label>TAGS*</label>
                                      <div class="ui form swdh30">
                                        <div class="field">
                                          <textarea
                                            rows="3"
                                            name="tags"
                                            id=""
                                            placeholder=""
                                            onChange={handleChange} 
                                            value={course.tags}
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="help-block">
                                        What knowledge, technology, tools required
                                        by users to start this course. (One per
                                        line).
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div class="col-lg-6 col-md-12">
                                    <div class="mt-30 lbel25">
                                      <label>Course Category*</label>
                                    </div>
                                    <select
                                      class="ui hj145 dropdown cntry152 prompt srch_explore"
                                      multiple="" onChange={handleChange} >
                                      {category.map((category,index)=>{
                                          return<option key={index} value={category.id}>{category.title}</option>
                                      })}
                                    </select>
                          
                                  </div>
                                  <div class="thumbnail-into">

                                    <div class="col-lg-6 col-md-12"><br/>
                                      <label class="label25 text-left">
                                        Course thumbnail*
                                      </label>
                                      <div class="thumb-item">
                                        <img src="images/thumbnail-demo.jpg" alt="" />
                                        <div class="thumb-dt">
                                          <div class="upload-btn">
                                            <input
                                              class="uploadBtn-main-input"
                                              type="file"
                                              id="ThumbFile__input--source"
                                              name="thumbnail"
                                              onChange={handleFileChange} 
                                            />
                                            <label
                                              for="ThumbFile__input--source"
                                              title="Zip"
                                            >
                                              Thumbnail
                                            </label>
                                          </div>
                                          <span class="uploadBtn-main-file">
                                            Size: 590x300 pixels. Supports: jpg,jpeg,
                                            or png
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button onClick={formSubmit} class="btn btn-danger">Submit for Review</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
      );
}

      export default CreateCourse;
