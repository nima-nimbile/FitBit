import React, { useState, useEffect } from 'react';
import "../Styles/form.css"

const Form = () => {
  const [saveData, setSaveData] = useState({
    firstName: "",
    age: "",
    born: "",
    weight: "",
    heigth: "",
    blood: "",
    activity: "",
    job: "",
    goal: ""
  })
  const [message, setMessage] = useState("");

  const changeHandeler = (event) => {
    const { name, value } = event.target;
    setSaveData((prevState) => ({

      ...prevState,
      [name]: value

    }));
  };


  const getMeesage = async (event) => {
    event.preventDefault();
    const option = {
      method: "POST",
      body: JSON.stringify({
        message: `Build a week of meal and exercise plan for the following ${saveData.firstName} to achieve their goal. Then, provide one list of complete groceries including the amounts. ${saveData.firstName}: ${saveData.age} year old born ${saveData.born}. weight ${saveData.weight}, height ${saveData.height}, blood type is ${saveData.blood}.
          Current level of activity: ${saveData.activity}. Job: ${saveData.job}. Goal: ${saveData.goal}`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch('http://localhost:5000/completion', option);
      const data = await response.json();
      console.log(data, "data");
      setMessage(data.completion.content);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <form className='form-container' onSubmit={getMeesage}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={saveData.firstName}
          onChange={changeHandeler}
        />
        <label htmlFor='age'>Your Age</label>
        <input
          type="number"
          id='age'
          className='age'
          name="age"
          value={saveData.age}
          onChange={changeHandeler}
          min="20"
          max="120"
        />
        <label htmlFor="weight"> Your Weight (kg)</label>
        <input
          type="number"
          id='weight'
          className='weight'
          name="weight"
          value={saveData.weight}
          onChange={changeHandeler}
          min="30"
          max="150"
        />

        <label htmlFor="height">Your Heigth (cm)</label>
        <input
          type="number"
          id='height'
          className='height'
          name="height"
          value={saveData.height}
          onChange={changeHandeler}
          min="50"
          max="300"
        />
        <label htmlFor='born' >What was the assigned sex at birth?</label>
        <select
          id="born"
          className='born'
          name="born"
          value={saveData.born}
          onChange={changeHandeler}
        >
          <option value="options">--Options--</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <label htmlFor='blood' >What is your blood type?</label>
        <select
          id="blood"
          className='blood'
          name="blood"
          value={saveData.blood}
          onChange={changeHandeler}
        >
          <option value="options">--Options--</option>
          <option value="Blood Type A">Blood Type A</option>
          <option value="Blood Type B">Blood Type B</option>
          <option value="Blood Type AB">Blood Type AB</option>
          <option value="Blood Type O">Blood Type O</option>
        </select>
        <label htmlFor='activity'>Current level of activity</label>
        <input
          type="text"
          id="activity"
          name="activity"
          value={saveData.activity}
          onChange={changeHandeler}
          placeholder='Run for 30 min a day'
        />
        <label htmlFor='job'>What is your current job?</label>
        <input
          type="text"
          id="job"
          name="job"
          value={saveData.job}
          onChange={changeHandeler}
          placeholder='Developer'
        />
        <label htmlFor='goal'>What is your goal for having this resepies?</label>
        <input
          type="text"
          id="goal"
          name="goal"
          value={saveData.goal}
          onChange={changeHandeler}
          placeholder='Burn belly fat and build muscle'
        />
        <button className='submit' >Submit</button>
      </form>
      {message && (
        <div>
          <h3>Generated Meal and Exercise Plan:</h3>
          <p>{message}</p>
        </div>
      )}

    </div>
  );
};

export default Form;