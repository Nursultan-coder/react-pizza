const initialState = {
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
  catigoryBy: null
}

const filters = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    }
  }
  if (action.type === "SET_CATIGORY_BY") {
    return {
      ...state,
      catigoryBy: action.payload,
    }
  }
  return state;
}

export default filters;