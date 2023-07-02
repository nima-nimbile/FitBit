import React, { useState } from 'react';
import "../Styles/form.css";
import "../Styles/table.css";
import PlanTable from './PlanTable';


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
  const [submit, setSubmit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [saveAsFile, setSaveAsFile] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const saveMessageAsFile = () => {
    const element = document.createElement("a");
    const file = new Blob([message], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "message.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSubmit(false)
  }


  const changeHandeler = (event) => {
    const { name, value } = event.target;
    setSaveData((prevState) => ({

      ...prevState,
      [name]: value

    }));
  };



  const getMeesage = async (event) => {
    event.preventDefault();
    setSubmit(true)
    setIsLoading(true)
    let born_statement = ``;
    if (saveData.goal) {
      born_statement = `born ${saveData.born}`
    }
    let job_statement = ``;
    if (saveData.job) {
      job_statement = `Job: ${saveData.job}`
    }
    const option = {
      method: "POST",
      body: JSON.stringify({
        message: `Build a Monday to Sunday of meal and exercise plan for the following person to achieve their goal. Build it in a way that it does not include any of these words meal, plan, List. Then, provide one list of complete groceries including the amounts. ${saveData.firstName}: ${saveData.age} year old ${born_statement}. weight ${saveData.weight}, height ${saveData.heigth}, blood type is ${saveData.blood}.
          Current level of activity: ${saveData.activity}. ${job_statement}. Goal: ${saveData.goal}. Format the response in json and return the daily plan in 'schedule' key, and the Grocery list in 'groceries' key. Each item in groceries should have two keys 'item' and 'amount'. Schedule should contain the following keys: Breakfast, Lunch, Dinner, Exercise`
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await fetch('https://fitfolio-server.onrender.com/completion', option);
      const data = await response.json();
      setMessage(data.completion.content);
      setSaveAsFile(true);
    } catch (error) {
      console.error(error);
      setErrorMessage("It seems our AI friend is taking a coffee break. Please come back later.")
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      {isOpen &&
        <div className='home'>
          <h1>Harness the Power of Nutrition for Bootcamp Success!</h1>
          <button className="button" onClick={toggleMenu}>Get Started</button>
          <span className='span-buttun'> on Your Health Journey Now!</span>
        </div>

      }

      {isLoading && (
        <div className="loading-animation">
          <h1 className='H'>Welcome {saveData.firstName}</h1>
          <h2 className='H'>Please Wait</h2>
          <div className="loop-wrapper">
            <div className="mountain"></div>
            <div className="hill"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="rock"></div>
            <div className="truck"></div>
            <div className="wheels"></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          {!submit && <form className='form-container' onSubmit={getMeesage}>
            <label htmlFor='firstName'>First Name *</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={saveData.firstName}
              onChange={changeHandeler}
              required
            />
            <label htmlFor='age'>Your Age *</label>
            <input
              type="number"
              id='age'
              className='age'
              name="age"
              value={saveData.age}
              onChange={changeHandeler}
              min="20"
              max="120"
              required
            />
            <label htmlFor="weight"> Your Weight (kg) *</label>
            <input
              type="number"
              id='weight'
              className='weight'
              name="weight"
              value={saveData.weight}
              onChange={changeHandeler}
              min="30"
              max="150"
              required
            />

            <label htmlFor="height">Your Heigth (cm) *</label>
            <input
              type="number"
              id='height'
              className='height'
              name="height"
              value={saveData.height}
              onChange={changeHandeler}
              min="50"
              max="300"
              required
            />
            <label htmlFor='born' >What was the assigned sex at birth? (Optional)</label>
            <select
              id="born"
              className='born'
              name="born"
              value={saveData.born}
              onChange={changeHandeler}
            >
              <option className='drop-down' value="options">--Options--</option>
              <option className='drop-down' value="Female">Female</option>
              <option className='drop-down' value="Male">Male</option>
            </select>

            <label htmlFor='blood' >What is your blood type? *</label>
            <select
              id="blood"
              className='blood'
              name="blood"
              value={saveData.blood}
              onChange={changeHandeler}
              required
            >
              <option className='drop-down' value="options">--Options--</option>
              <option className='drop-down' value="Blood Type A">A</option>
              <option className='drop-down' value="Blood Type B">B</option>
              <option className='drop-down' value="Blood Type AB">AB</option>
              <option className='drop-down' value="Blood Type O">O</option>
            </select>
            <label htmlFor='activity'>Current level of activity *</label>
            <input
              type="text"
              id="activity"
              name="activity"
              value={saveData.activity}
              onChange={changeHandeler}
              placeholder='Your Activity'
              required
            />
            <label htmlFor='job'>What is your current job? (Optional)</label>
            <input
              type="text"
              id="job"
              name="job"
              value={saveData.job}
              onChange={changeHandeler}
              placeholder='Your Job'
            />
            <label htmlFor='goal'>What is your goal for having this resepies? *</label>
            <textarea
              type="text"
              id="goal"
              name="goal"
              className='goal'
              value={saveData.goal}
              onChange={changeHandeler}
              placeholder='Your Goal'
              required
            />
            <button className='submit' >Submit</button>

          </form>
          }

          {message && (
            <div className='last-container'>
              <PlanTable
                key={saveData.firstName}
                message={message}
              />
              {saveAsFile && (
                <button className='saveFile' onClick={saveMessageAsFile}>Save as File</button>
              )}
            </div>
          )}

          {errorMessage && (
            <div className="loading-animation">
              <h1 className='H'>Sorry {saveData.firstName},</h1>
              <h1 className='error-message'>{errorMessage}</h1>
              <div className="coffee-cup"></div>

            </div>
          )}
        </>
      )}
    </>
  )
};

export default Form;