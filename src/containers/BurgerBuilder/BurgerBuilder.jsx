import React, { Component } from 'react';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSumarry from '../../components/Burger/OrderSumarry/OrderSumarry';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hook/Auxx';

const INGREDIENT_PRICE = {
  salad : 0.1,
  bacon : 0.4,
  cheese : 0.2,
  meat : 0.8
}

class BurgerBuilder extends Component {
  state = {
    ingredients : {
      salad : 0,
      bacon : 0,
      cheese : 0,
      meat : 0
    },
    totalPrice : 1,
    purchasable : false,
    purchasing : false
  }

  purchseHandler = () => {
    this.setState({purchasing : true});
  }

  purchseCancelHandler = () => {
    this.setState({purchasing : false});
  }
  
  purchaseContinueHandler = () => {
    alert("You continued");
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(inKey => {
      return ingredients[inKey];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);

    this.setState({purchasable : sum > 0})
  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    } 
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients : updateIngredients,
      totalPrice : newPrice
    });
    this.updatePurchaseState(updateIngredients);
  }

  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if(oldCount <= 0){
      return;
    }

    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients
    } 
    updateIngredients[type] = updateCount;

    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({
      ingredients : updateIngredients,
      totalPrice : newPrice
    });
    this.updatePurchaseState(updateIngredients);
  }
  
  render() { 
    const disabledInfo = {
      ...this.state.ingredients
    }
    
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchseCancelHandler}>
          <OrderSumarry 
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchseCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} /> 
        <BuildControls 
          ingredientAdded={this.addIngredientsHandler}
          ingredientRemoved={this.removeIngredientsHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;