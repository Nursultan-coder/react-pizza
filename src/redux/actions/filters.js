export const setSortBy = ({type, order}) => ({
  type: "SET_SORT_BY",
  payload: {type, order},
});

export const setCatigory = (index) => ({
  type: "SET_CATIGORY_BY",
  payload: index,
});