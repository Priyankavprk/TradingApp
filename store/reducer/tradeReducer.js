import {REHYDRATE} from 'redux-persist/lib/constants';

const initialState = {
  data: [],
  currencyPair: "",
};

export default function tradeReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE: {
      if (action.payload) {
        const incoming = action.payload && action.payload.tradeReducer;
        if (incoming) {
          return {...state, ...incoming};
        }
      }
      return state;
    }
    case "UPDATE_DATA": {
      console.log("reducer", action)
      return {
        ...state,
        data: action.items,
        currencyPair: action.currencyPair
      }
    }
    default:
      return state;
  }
}