import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import CreateCourse from './pages/Instructor/CreateCourse';
import Home from './pages/Home';
import InstructorRegister from './pages/Instructor/InstructorRegister';
import InstructorLogin from './pages/Instructor/InstructorLogin';
import InstructorLogout from './pages/Instructor/InstructorLogout';
import InstructorDashboard from './pages/Instructor/InstructorDashboard';
import InstructorCourses from './pages/Instructor/InstructorCourses';



function App() {
  return (
    <div>
       <Header/>
       <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="instructor-login" element={<InstructorLogin/>} />
        <Route path="instructor-logout" element={<InstructorLogout/>} />
        <Route path="instructor-register" element={<InstructorRegister/>} />
        <Route path="instructor-dashboard" element={<InstructorDashboard/>} />
        <Route path="instructor-courses" element={<InstructorCourses/>} />
        <Route path="create-course" element={<CreateCourse/>} />
     
      </Routes> 
      <Footer/>
  
    </div>
  );
}

export default App;







<Footer/> 
