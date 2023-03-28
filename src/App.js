import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [activity, setActivity] = useState(null);
  const [type, setType] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    if (type === "all") {
      fetch(`https://www.boredapi.com/api/activity`)
        .then((response) => response.json())
        .then((data) => setActivity(data))
        .catch((error) => console.log(error));
    } else if (type) {
      fetch(`https://www.boredapi.com/api/activity?type=${type}`)
        .then((response) => response.json())
        .then((data) => setActivity(data))
        .catch((error) => console.log(error));
    }
  }, [type]);

  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <div className="app__header-text">
        <h1>Are you Bored?</h1>
        <h3>Let's find something to do!</h3>
      </div>
      <div className="app__middle-select">
        <label>
          <h3>Please select a type of activity:</h3>
          <select value={type} onChange={handleTypeChange}>
            <option value="">--Please choose an option--</option>
            <option value="all">All</option>
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>
        </label>
      </div>
      {activity && (
        <div className="app__wrapper">
          <div className="left">
            <img src={`/${activity.type}.jpg`} alt={activity.type} />
          </div>
          <div className="right">
            <h2>{activity.activity}</h2>
            <p>Type: {activity.type}</p>
            <p>Participants: {activity.participants}</p>
            <p>Accessibility: {activity.accessibility * 100} % </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
