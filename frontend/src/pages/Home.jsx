import React from "react";
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios';

const baseUrl ="http://127.0.0.1:8000/api/"
const Home = () => {
    const [courseData, setCourseData] = useState([]);
  
    //Fetch course when page loads
    useEffect(()=>{
      document.title = "courses";
      try{
        axios.get(baseUrl + "course")
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
          <div class="container-fluid" >
            <div class="row">
              <div class="col-lg-12">
                <div class="section3125" >
                  <div class="row justify-content-center">
                    <div class="col-xl-4 col-lg-5 col-md-6">
                      <div class="preview_video">
                        <a
                          href="#"
                          class="fcrse_img"
                          data-toggle="modal"
                          data-target="#videoModal"
                        >
                          <img src="images/courses/img-2.jpg" alt="" />
                          <div class="course-overlay">
                            <span class="play_btn1">
                              <i class="uil uil-play"></i>
                            </span>
                            <span class="_215b02" >Learn about us</span>
                          </div>
                        </a>
                      </div>
                      <div class="_215b10">
                        <a href="#" class="_215b11">
                          <span>
                            <i class="uil uil-heart"></i>
                          </span>
                          Save
                        </a>
                        <a href="#" class="_215b12">
                          <span>
                            <i class="uil uil-windsock"></i>
                          </span>
                          Report abuse
                        </a>
                      </div>
                    </div>
                    <div class="col-xl-8 col-lg-7 col-md-6">
                      <div class="_215b03">
                        <h2 style={{color:'#000'}}>Welcome to East African Institute of Homecare Management <br/> 
                        E-Learning Portal</h2>
                        <span class="_215b04" style={{color:'#000'}}>
                          Where we help you meet your educational goals from wherever you are!
                        </span>
                      </div>
                  
                      <div class="_215b05" style={{color:'#000'}}>1,521 students enrolled</div>
                      <div class="_215b06">
                        <div class="_215b08">
                    
                        </div>
                      </div>
                  
                      <ul class="_215b31">
                        <li>
                          <button class="btn_adcart">Student Application</button>
                        </li>
                        <li>
                          <button class="btn_buy" style={{backgroundColor:'blue'}}>Become a Tutor</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12 col-lg-8">
              <div class="section3125">
                <div class="explore_search">
                  <div class="ui search focus">
                    <div class="ui left icon input swdh11">
                      <input
                        class="prompt srch_explore"
                        type="text"
                        placeholder="Search for Tuts Videos, Tutors, Tests and more.."
                      />
                      <i class="uil uil-search-alt icon icon2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-12">
              <div class="section3125 mb-15 mt-50">
                <h4 class="item_title">Live Streams</h4>
                <a href="live_streams.html" class="see150">See all</a>
                <div class="la5lo1">
                  <div class="owl-carousel live_stream owl-theme">
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-1.jpg" alt="" />
                          <h4>John Doe</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-2.jpg" alt="" />
                          <h4>Jassica</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-9.jpg" alt="" />
                          <h4>Edututs+</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-3.jpg" alt="" />
                          <h4>Joginder Singh</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-4.jpg" alt="" />
                          <h4>Zoena</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-5.jpg" alt="" />
                          <h4>Albert Dua</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-6.jpg" alt="" />
                          <h4>Ridhima</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-7.jpg" alt="" />
                          <h4>Amritpal</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                    <div class="item">
                      <div class="stream_1">
                        <a href="live_output.html" class="stream_bg">
                          <img src="images/left-imgs/img-8.jpg" alt="" />
                          <h4>Jimmy</h4>
                          <p>live<span></span></p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="col-md-12">
              <div class="_14d25">
                <div class="row">

                { courseData.map((course,index)=> 
                  <div class="col-lg-3 col-md-4">
                    <div class="fcrse_1 mt-30">
                      <a href="course_detail_view.html" class="fcrse_img">
                        <img src="images/courses/img-1.jpg" alt="" />
                        <div class="course-overlay">
                          <div class="badge_seller">Bestseller</div>
                          <div class="crse_reviews">
                            <i class="uil uil-star"></i>4.5
                          </div>
                          <span class="play_btn1"
                            ><i class="uil uil-play"></i
                          ></span>
                          <div class="crse_timer">25 hours</div>
                        </div>
                      </a>
                      <div class="fcrse_content">
                        <div class="eps_dots more_dropdown">
                          <a href="#"><i class="uil uil-ellipsis-v"></i></a>
                          <div class="dropdown-content">
                            <span><i class="uil uil-share-alt"></i>Share</span>
                            <span><i class="uil uil-heart"></i>Save</span>
                            <span
                              ><i class="uil uil-ban"></i>Not Interested</span
                            >
                            <span><i class="uil uil-windsock"></i>Report</span>
                          </div>
                        </div>
                        <div class="vdtodt">
                          <span class="vdt14">109k views</span>
                          <span class="vdt14">15 days ago</span>
                        </div>
                        <a href="course_detail_view.html" class="crse14s">{course.title}</a>
                        <a href="#" class="crse-cate"></a>
                        <div class="auth1lnkprce">
                          <p class="cr1fot">By <a href="#">{course.teacher}</a></p>
                          <div class="prce142">$10</div>
                          <button class="shrt-cart-btn" title="cart">
                            <i class="uil uil-shopping-cart-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
