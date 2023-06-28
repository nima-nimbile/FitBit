import React from 'react';
import '../Styles/table.css';
import PropTypes from 'prop-types';

function PlanTable(props) {
  const text = props.message
  const days = text.split(/(?=\b[A-Z][a-zA-Z]+\b:)/);

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
            if (day.trim() === '') {
              return null;
            }
            const [dayName, ...meals] = day.split(': ');
            const formattedMeals = meals.join('\n');

            return (
              <tr key={index}>
                <td className="day-table">{dayName}</td>
                <td className="meal-table">{formattedMeals}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

PlanTable.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PlanTable;