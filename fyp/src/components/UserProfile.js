import React from 'react'
import { useNavigate } from 'react-router-dom';
import pp from "../images/pp.png"


const UserProfile = ({ name, email,phone }) => {
  const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);
  console.log('Name:', name);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin');
  };
  const handledonor = () => {
    navigate('/registerdonor');
  };
  const handleexpr = () => {
    navigate('/userexperience');
  };
  const handleprf = () => {
    navigate('/postrequestform');
  };

  const handlehb = () => {
    navigate('/healthblog');
  };
  const handlefindb = () => {
    navigate('/findblood');
  };
  const handlevposts = () => {
    navigate('/viewposts');
  };
 
  
  
  return (
    <>
 

      <div className='up-bg'>
        <div className='prf-box'>
          <div className='profile-pic'></div>
          <img className='pp' src={pp} alt="" />
            <br />
            <h3 className='u-name'> Name: <span>{capitalizedFirstName}</span></h3>
            
            <h4 className='u-email'>Email: {email}</h4>
          <h4 className='u-ph'>Phone: {phone}</h4>
            <div className='usr-btns'>
            <button  onClick={handleLogout}>Logout</button>
            <button  onClick={handledonor}>Register as Donor</button>
            <button onClick={handlefindb}>Find Blood</button>
            <button onClick={handleprf}>Blood Request</button>
            <button onClick={handlevposts}>Posts</button>
            <button onClick={handlehb}>Health Blogs</button>
            <button  onClick={handleexpr}>User Experience</button>
            
            </div>
        </div>
        </div>
      
    </>
  )
}

export default UserProfile