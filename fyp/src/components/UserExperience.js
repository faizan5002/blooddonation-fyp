import { useState} from "react";

import ue from "../images/ue.jpg"

function UserExperience() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experiences, setExperiences] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

  };
  return (
    
    <div className="bg-ue">
    <div className="ue-box">
    
      <h1 className="ue-h">User Experiences</h1>
      <hr className='HoriLine'/>

      <form onSubmit={handleSubmit}>
        <input className="ue-tb1" type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} required />
        <textarea className="ue-tb2" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
        <button className="ue-btn"type="submit">Submit</button>
      </form>

      <ul>
        {experiences.map((experience) => (
          <li key={experience._id}>
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
            <p>Author: {experience.author.name}</p>
            <p>Timestamp: {new Date(experience.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <div class="right-ueB">
    <img className='img-ueB' src={ue} alt="" />
    </div>
    </div>
    <h1>User Experiences should be added here on clicking the add button</h1>
    </div>
  );
}

export default UserExperience;
