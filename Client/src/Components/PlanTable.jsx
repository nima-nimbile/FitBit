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
            const { breakfast, lunch, dinner, exercise } = jsonData.schedule[day];
            return (
              <tr key={index}>
                <td className='day-table'>{day}</td>
                <td className='meal-table'>Breakfast: {breakfast}</td>
                <td className='meal-table'>Lunch: {lunch}</td>
                <td className='meal-table'>Dinner: {dinner}</td>
                <td className='meal-table'>Exercise: {exercise}</td>
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
                    <td className='meal-table'>{grocery.item}: {grocery.amount}</td>
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