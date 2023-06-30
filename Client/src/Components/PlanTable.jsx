import React from 'react';
import '../Styles/table.css';
import PropTypes from 'prop-types';

function PlanTable(props) {
  // const text = "{\n  \"person\": {\n    \"name\": \"Niloufar\",\n    \"age\": 35,\n    \"gender\": \"Female\",\n    \"weight\": 58,\n    \"height\": 157,\n    \"blood_type\": \"B\",\n    \"activity_level\": \"No Activity\",\n    \"occupation\": \"Software Developer\",\n    \"goal\": \"burn fat\"\n  },\n  \"groceries\": [\n    {\n      \"item\": \"Spinach\",\n      \"amount\": \"200g\"\n    },\n    {\n      \"item\": \"Broccoli\",\n      \"amount\": \"150g\"\n    },\n    {\n      \"item\": \"Chicken Breast\",\n      \"amount\": \"500g\"\n    },\n    {\n      \"item\": \"Salmon\",\n      \"amount\": \"300g\"\n    },\n    {\n      \"item\": \"Eggs\",\n      \"amount\": \"1 dozen\"\n    },\n    {\n      \"item\": \"Greek Yogurt\",\n      \"amount\": \"500g\"\n    },\n    {\n      \"item\": \"Almonds\",\n      \"amount\": \"100g\"\n    },\n    {\n      \"item\": \"Avocado\",\n      \"amount\": \"2\"\n    },\n    {\n      \"item\": \"Quinoa\",\n      \"amount\": \"250g\"\n    },\n    {\n      \"item\": \"Olive Oil\",\n      \"amount\": \"500ml\"\n    }\n  ],\n  \"schedule\": {\n    \"Monday\": {\n      \"breakfast\": \"Scrambled eggs with spinach\",\n      \"lunch\": \"Grilled chicken breast with broccoli\",\n      \"dinner\": \"Baked salmon with quinoa\",\n      \"exercise\": \"30 minutes of brisk walking\"\n    },\n    \"Tuesday\": {\n      \"breakfast\": \"Greek yogurt with almonds\",\n      \"lunch\": \"Grilled chicken breast with avocado\",\n      \"dinner\": \"Steamed salmon with broccoli\",\n      \"exercise\": \"20 minutes of bodyweight exercises\"\n    },\n    \"Wednesday\": {\n      \"breakfast\": \"Spinach omelette\",\n      \"lunch\": \"Grilled chicken breast with quinoa\",\n      \"dinner\": \"Baked salmon with steamed broccoli\",\n      \"exercise\": \"30 minutes of cycling\"\n    },\n    \"Thursday\": {\n      \"breakfast\": \"Greek yogurt with almonds\",\n      \"lunch\": \"Grilled chicken breast with avocado\",\n      \"dinner\": \"Steamed salmon with quinoa\",\n      \"exercise\": \"20 minutes of bodyweight exercises\"\n    },\n    \"Friday\": {\n      \"breakfast\": \"Scrambled eggs with spinach\",\n      \"lunch\": \"Grilled chicken breast with broccoli\",\n      \"dinner\": \"Baked salmon with steamed broccoli\",\n      \"exercise\": \"30 minutes of brisk walking\"\n    },\n    \"Saturday\": {\n      \"breakfast\": \"Greek yogurt with almonds\",\n      \"lunch\": \"Grilled chicken breast with avocado\",\n      \"dinner\": \"Steamed salmon with quinoa\",\n      \"exercise\": \"20 minutes of bodyweight exercises\"\n    },\n    \"Sunday\": {\n      \"breakfast\": \"Spinach omelette\",\n      \"lunch\": \"Grilled chicken breast with quinoa\",\n      \"dinner\": \"Baked salmon with steamed broccoli\",\n      \"exercise\": \"30 minutes of cycling\"\n    }\n  }\n}"
  const text = props.message;
  const jsonData = JSON.parse(text);
  // console.log("props.message", props.message)
  // const propsJsonData = JSON.parse(props.message);
  // console.log("propsJsonData", propsJsonData)
  console.log("jsonData", jsonData)
  // const days = text.split(/(?=\b[A-Z][a-zA-Z]+\b:)/);
  const days = Object.keys(jsonData.schedule);
  // const propsDays = Object.keys(propsJsonData.schedule);
  const groceryList = jsonData.groceries;

  console.log("groceryList", groceryList)
  console.log("days", days)
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