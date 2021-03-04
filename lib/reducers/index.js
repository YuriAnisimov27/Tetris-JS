import {
  GET_THINGS_FROM_DB,
  GET_ALL_THINGS_FROM_DB,
  POST_THING_DB,
  PUT_THING_DB,
  DELETE_THING_DB
} from '../actionTypes.js';


const initialState = {
  data: [],
  loading: true,
  error: false,
  things: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THINGS_FROM_DB:
      return {
        ...state
      };
    case GET_ALL_THINGS_FROM_DB:
      return {
        ...state
      };
    case POST_THING_DB:
      return {
        ...state
      };
    case PUT_THING_DB:
      return {
        ...state
      };
    case DELETE_THING_DB:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
