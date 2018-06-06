import _ from "lodash";

const initialState = {
  items: [],
  loading: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case `ITEM_GETALL`:
      return {
        ...state,
        items: action.items
      };
    case `ITEM_ADD`:
      const items = state.items.push(action.item);
      return {
        ...state,
        items: _.assign(state.items, action.item)
      };
    case `ITEM_LOADING`:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};
