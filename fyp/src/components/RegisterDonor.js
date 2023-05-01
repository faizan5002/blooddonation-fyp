
import React, { useState } from 'react';
import axios from 'axios';
import registerdonor from "../images/registerdonor.jpg"


const RegisterDonor = ( {userId }) => {
  
  const [bloodType, setBloodType] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const [lastDonationDate, setLastDonationDate] = useState('');
  const [message, setMessage] = useState(''); 

  const handlePaidChange = () => {
    setIsPaid(true);
    setIsFree(false);
  };

  const handleFreeChange = () => {
    setIsFree(true);
    setIsPaid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    
    const newDonor = {
      userid:userId,
      bloodType,
      age,
      city,
      isPaid,
      isFree,
      lastDonationDate
    };

    
    axios.post("http://localhost:9002/registerdonor",newDonor,{ 
  headers: { 
        "user-id":userId, 
      },
     })
    .then((res) => {
      setMessage(res.data.message);
    })
    .catch((err) => {
      setMessage("An error occurred while processing your request.");
    });
};


  return (
    <div className="'regD-bg">
      <div className="regD-box">
      <h1 className='centerhead-regD'>Register Yourself as donor</h1>

        <form onSubmit={handleSubmit}>
            <div className='regD-allinp'>
              <label style={{color:"black",marginLeft:"50px",fontFamily:"Roboto" ,fontSize:"16px",fontWeight:"bold"}}>Blood Type</label>
            <select className='inp-regD' value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
              <option value="">Select a blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          <br />
          <label style={{color:"black",marginLeft:"50px",fontFamily:"Roboto" ,fontSize:"16px",fontWeight:"bold"}}>Age</label>
            <input className='inp-regD'placeholder='How old are You?' type="number" value={age} onChange={(e) => setAge(e.target.value)} min="18" max="60" />
          <br />

          <label style={{color:"black",marginLeft:"50px",fontFamily:"Roboto" ,fontSize:"16px",fontWeight:"bold"}}> City</label>
          <select className='inp-regD' value={city} onChange={(e) => setCity(e.target.value)}>
         
        <option value="">Select your current City</option>
        <option value="Ahmedpur East">Ahmedpur East</option>
        <option value="Alipur">Alipur</option>
        <option value="Arifwala">Arifwala</option>
        <option value="Attock">Attock</option>
        <option value="Bahawalnagar">Bahawalnagar</option>
        <option value="Bahawalpur">Bahawalpur</option>
        <option value="Bhakkar">Bhakkar</option>
        <option value="Burewala">Burewala</option>
        <option value="Chakwal">Chakwal</option>
        <option value="Chiniot">Chiniot</option>
        <option value="Daska">Daska</option>
        <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
        <option value="Fateh Jang">Fateh Jang</option>
        <option value="Gujar Khan">Gujar Khan</option>
        <option value="Gujranwala">Gujranwala</option>
        <option value="Gujrat">Gujrat</option>
        <option value="Hafizabad">Hafizabad</option>
        <option value="Haroonabad">Haroonabad</option>
        <option value="Jaranwala">Jaranwala</option>
        <option value="Jhang">Jhang</option>
        <option value="Jhelum">Jhelum</option>
        <option value="Kamoke">Kamoke</option>
        <option value="Kasur">Kasur</option>
        <option value="Khanewal">Khanewal</option>
        <option value="Kharian">Kharian</option>
        <option value="Khushab">Khushab</option>
        <option value="Kot Addu">Kot Addu</option>
        <option value="Layyah">Layyah</option>
        <option value="Lodhran">Lodhran</option>
        <option value="Mandi Bahauddin">Mandi Bahauddin</option>
        <option value="Mian Channu">Mian Channu</option>
        <option value="Mianwali">Mianwali</option>
        <option value="Multan">Multan</option>
        <option value="Muridke">Muridke</option>
        <option value="Muzaffargarh">Muzaffargarh</option>
        <option value="Narowal">Narowal</option>
        <option value="Okara">Okara</option>
        <option value="Pakpattan">Pakpattan</option>
        <option value="Rahim Yar Khan">Rahim Yar Khan</option>
        <option value="Raiwind">Raiwind</option>
        <option value="Rajanpur">Rajanpur</option>
        <option value="Rawalpindi">Rawalpindi</option>
        <option value="Sadiqabad">Sadiqabad</option>
        <option value="Sahiwal">Sahiwal</option>
        <option value="Sargodha">Sargodha</option>
        <option value="Shahkot">Shahkot</option>
        <option value="Sheikhupura">Sheikhupura</option>
        <option value="Sialkot">Sialkot</option>
        <option value="Sohawa">Sohawa</option>
        <option value="Talagang">Talagang</option>
        <option value="Toba Tek Singh">Toba Tek Singh</option>
        <option value="Vehari">Vehari</option>

  </select>
           
            
            <br />
            
            <label style={{color:"black",marginLeft:"50px",marginTop:"10px",fontFamily:"Roboto" ,fontSize:"16px",fontWeight:"bold"}}>Last Donation Date</label>
            <input className='inp-regD-date' type="date" value={lastDonationDate} onChange={(e) => setLastDonationDate(e.target.value)} />
            
            <br />

         
            <label style={{color:"black",marginLeft:"120px",fontFamily:"Roboto" ,fontSize:"16px",fontWeight:"bold"}}> Paid Donor</label>
            <input  type="checkbox" checked={isPaid}  onChange={handlePaidChange} />

            <label style={{color:"black",marginLeft:"80px",fontFamily:"Roboto" ,fontSize:"16px",fontWeight:"bold"}}> Free Donor</label>
            <input  type="checkbox" checked={isFree}  onChange={handleFreeChange} />
            
            
            </div>
          <button type="submit" className="btn-reg">Register as Donor</button>
        </form>
        <div class="right-regD">
    <img className='img-regD' src={registerdonor} alt="" />
    </div>
      </div>
    </div>
  );

  };
export default RegisterDonor