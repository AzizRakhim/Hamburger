import React from 'react';
import Auxx from "../../../hook/Auxx";

function OrderSumarry(props) {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(inKey => {
      return (
        <li key={inKey+1}>
          <span style={{textTransform : "capitalize"}}>{inKey}</span>: {props.ingredients[inKey]}
        </li>)
    })

  return (
    <Auxx>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>

      <p>Continue to Checkout?</p>
    </Auxx>
  )
}

export default OrderSumarry
