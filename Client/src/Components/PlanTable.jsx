import React from 'react';
import '../Styles/table.css';
import PropTypes from 'prop-types';

function PlanTable(props) {
  const text = props.message;
  const jsonData = JSON.parse(text);
  const days = Object.keys(jsonData.schedule);
  const groceryList = jsonData.groceries;

  return (
    <div className="table-container">
      <table className="plan-table">
        <thead>
          <tr>
            <th>Week of Meal and Exercise Plan</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => {
            const daySchedule = jsonData.schedule[day];
            return (
              <tr key={index}>
                <td className='day-table'>{day}</td>
                {daySchedule.Breakfast && <td className='meal-table'>Breakfast: {daySchedule.Breakfast}</td>}
                {daySchedule.Lunch && <td className='meal-table'>Lunch: {daySchedule.Lunch}</td>}
                {daySchedule.Dinner && <td className='meal-table'>Dinner: {daySchedule.Dinner}</td>}
                {daySchedule.Exercise && <td className='meal-table'>Exercise: {daySchedule.Exercise}</td>}
              </tr>
            );
          })}
          <table className="Grocery-table">
            <thead>
              <tr>
                <th>Grocery List</th>
              </tr>
            </thead>
            <tbody>
              {groceryList.map((grocery, index) => {
                return (
                  <tr key={index}>
                    {grocery.item && grocery.amount && <td className='meal-table'>{grocery.item}: {grocery.amount}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </tbody>
      </table>
    </div>
  );
}

PlanTable.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PlanTable;