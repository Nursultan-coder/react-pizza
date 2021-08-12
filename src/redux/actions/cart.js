export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});

export const putAwayPizza = (id) => ({
  type: "PUT_AWAY_PIZZA",
  payload: id,
});

export const addOnePizza = (id) => ({
  type: "ADD_ONE_PIZZA",
  payload: id,
});

export const putAwayPizzas = (id) => ({
  type: "PUT_AWAY_PIZZAS",
  payload: id,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});