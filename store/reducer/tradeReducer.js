import {REHYDRATE} from 'redux-persist/lib/constants';

const initialState = {
  data: [],
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

    default:
      return state;
  }
}