import { ARTIST_HOME, SEARCH_ARTIST } from "../actions";

const initialState = {
  artistSearch: [],
  //   artistHome: [],
};

const searchReducer = function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        artistSearch: action.payload,
      };
    // case ARTIST_HOME:
    //   return {
    //     ...state,
    //     artistHome: action.payload,
    //   };
    default:
      return state;
  }
};

export default searchReducer;
