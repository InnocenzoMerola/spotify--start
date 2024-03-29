import { SEARCH_ARTIST } from "../actions";

const initialState = {
  artistSearch: [],
};

const searchReducer = function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        artistSearch: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
