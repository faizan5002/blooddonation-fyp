import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const DonorsDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [donorsdetails, setDonorsDetails] = useState([
    {
      name: "",
      contactNumber: "",
      city: "",
      bloodgroup:"",
      paid_free:"",
      lastdonation:""

    },
   
    // Add more blood banks as needed
  ]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDonorsDetailsByCity = donorsdetails.filter((donorsdetails) =>
    donorsdetails.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDonorsDetailsByBloodGroup = donorsdetails.filter((donorsdetails) =>
    donorsdetails.bloodgroup.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body-bg"> 
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="srch-h">Search your Donor</Form.Label>
          <Form.Control className='srch-br' type="text" placeholder="Enter city name" onChange={handleChange}/>
          <Form.Control className='srch-br' type="text" placeholder="Enter Blood Group" onChange={handleChange}/>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead className="form-bg">
          <tr className="form-tr">
            <th>Donors Name</th>
            <th>Contact number</th>
            <th>City</th>
            <th>Blood Group</th>
            <th>Last Donation Date</th>
            <th>Paid/Free</th>


          </tr>
        </thead>
        <tbody>
          {filteredDonorsDetailsByCity.map((donorsdetails, index) => (
            <tr key={index}>
              <td>{donorsdetails.name}</td>
              <td>{donorsdetails.contactNumber}</td>
              <td>{donorsdetails.city}</td>
              <td>{donorsdetails.bloodgroup}</td>
              <td>{donorsdetails.paid_free}</td>
              <td>{donorsdetails.lastdonation}</td>

            </tr>
          ))}
           {filteredDonorsDetailsByBloodGroup.map((donorsdetails, index) => (
            <tr key={index}>
              <td>{donorsdetails.name}</td>
              <td>{donorsdetails.contactNumber}</td>
              <td>{donorsdetails.city}</td>
              <td>{donorsdetails.bloodgroup}</td>
              <td>{donorsdetails.paid_free}</td>
              <td>{donorsdetails.lastdonation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default DonorsDetails;
