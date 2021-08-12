const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const putAwayOnePizza = (id) => {

}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload],
        },
        totalPrice: state.totalPrice + action.payload.price,
        totalCount: state.totalCount + 1,
      };
    case 'ADD_ONE_PIZZA':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: [...state.items[action.payload], state.items[action.payload][0]],
        },
        totalPrice: state.totalPrice + state.items[action.payload][0].price,
        totalCount: state.totalCount + 1,
      };









    case 'PUT_AWAY_PIZZA':
      if(state.items[action.payload].length !== 1) {
        const newItem = state.items[action.payload].slice(1);

        return {
          ...state,
          items: {
            ...state.items,
            [action.payload]: newItem,
          },
          totalPrice: state.totalPrice - state.items[action.payload][0].price,
          totalCount: state.totalCount - 1,
        }
      }else {
        return state;
      }
    case 'PUT_AWAY_PIZZAS':
      const newItems = {
        ...state.items
      };
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - state.items[action.payload][0].price * state.items[action.payload].length,
        totalCount: state.totalCount - state.items[action.payload].length,
      };
    case 'CLEAR_CART':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    default:
      return state;
  }
};

export default cart;