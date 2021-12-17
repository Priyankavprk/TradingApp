import {REHYDRATE} from 'redux-persist/lib/constants';

const initialState = {
  data: null,
  currencyPair: "",
  orderBook: [],
  bids: [],
  asks: [],
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
      return {
        ...state,
        data: action.items,
        currencyPair: action.currencyPair
      }
    }
    case "UPDATE_ORDERBOOK": {
      return {
        ...state,
        orderBook: action.items,
        bids: action.items.bids.slice(0,5),
        asks: action.items.asks.slice(0,5)
      }
    }
    case "REFRESH_DATA": {
      return {
        ...initialState,
      }
    }
    default:
      return state;
  }
}