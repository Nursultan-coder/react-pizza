export const setLoaded = val => ({
  type: "SET_LOADED",
  payloaped: val,
})

export const fetchPizzas = (catigoryBy, sortBy) => dispatch => {
  dispatch(setLoaded(false));
  fetch(`/pizzas?${catigoryBy !== null ? `category=${catigoryBy}` : ""}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((resp) => resp.json())
    .then((json) => {
      dispatch(setPizzas(json));
    });
}

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});