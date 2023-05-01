import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Calculator from './components/Calculator';
import Signin from './components/Signin';
import BloodBanks from './components/BloodBanks';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import UserProfileNavbar from './components/UserProfileNavbar';
import RegisterDonor from './components/RegisterDonor';
import UserExperience from './components/UserExperience';
import PostRequestForm from './components/PostRequestForm';
import HealthBlog from './components/HealthBlog';
import FindBlood from './components/FindBlood';
import DonorsDetails from './components/DonorsDetails';
import ViewPosts from './components/ViewPosts';
import LiveLocation from './components/LiveLocation';
const App = () => {
  const [user, setUser]=useState({});
  const location = useLocation();

  return (
    <>
      {user && user._id && location.pathname === '/userprofile' ? <UserProfileNavbar /> : 
      user && user._id && location.pathname === '/userexperience' ? <UserProfileNavbar /> :
      user && user._id && location.pathname === '/registerdonor' ? <UserProfileNavbar /> :
      user && user._id && location.pathname === '/findblood' ? <UserProfileNavbar /> :
      user && user._id && location.pathname === '/healthblog' ? <UserProfileNavbar /> :
      user && user._id && location.pathname === '/postrequestform' ? <UserProfileNavbar /> :
      user && user._id && location.pathname === '/viewposts' ? <UserProfileNavbar /> :
      user && user._id && location.pathname === '/donorsdetails' ? <UserProfileNavbar /> :
      user && user._id && location.pathname === '/livelocation' ? <UserProfileNavbar /> :



      
      
      <Navbar />}

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/bloodbanks" element={<BloodBanks/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/signin" element={<Signin setUser={setUser}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/registerdonor" element={<RegisterDonor/>}/>
        <Route path="/postrequestform" element={<PostRequestForm/>}/>
        <Route path="/healthblog" element={<HealthBlog/>}/>
        <Route path="/findblood" element={<FindBlood/>}/>
        <Route path="/donorsdetails" element={<DonorsDetails/>}/>
        <Route path="/userexperience" element={<UserExperience/>}/>
        <Route path="/userprofile" element={user && user._id ? <UserProfile name={user.name} email={user.email} phone={user.phone} /> : <Signin setUser={setUser}/>} />
        <Route path="/viewposts" element={<ViewPosts/>}/>
        <Route path="/livelocation" element={<LiveLocation/>}/>
      </Routes>
    </>
  );
};

export default App;
