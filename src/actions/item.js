import axios from "axios";
const url = "localhost:3000";

export const add = item => dispatch =>
  dispatch({
    type: `ITEM_ADD`,
    item
  });

export const getAll = () => async dispatch => {
  await dispatch(loading(true));
  let items = [
    {
      _id: "5b18109a48c6ff28e46bc522",
      name: "Hello Punch",
      detail: "detail Hello Punch"
    }
  ];
  try {
    items = await axios(`${url}/item`);
  } catch (err) {
    items = [{ name: "error" }];
  }
  await dispatch({ type: `ITEM_GETALL`, items });
  await dispatch(loading(false));
};

export const loading = load => dispatch =>
  dispatch({
    type: `ITEM_LOADING`,
    loading: load
  });
