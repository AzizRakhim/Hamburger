import React from 'react';
import Auxx from "../../../hook/Auxx";
import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>

      <p>Continue to Checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType={"Success"} clicked={props.purchaseContinue}>CONTINUE</Button>
    </Auxx>
  )
}

export default OrderSumarry
