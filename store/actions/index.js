export function getTradeData(payload) {
    return async (dispatch, getState) => {
        fetch(`https://www.bitstamp.net/api/ticker/${payload.data}`, {
            method: 'get'
        })
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: "UPDATE_DATA",
                items: response,
                currencyPair: payload.data,
            });
        });
    }
}

export function loadOrderBook(payload) {
    return async (dispatch, getState) => {
        const currenyPair = getState().tradeReducer.currencyPair;
        fetch(`https://www.bitstamp.net/api/order_book/${currenyPair}`, {
            method: 'get'
        })
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: "UPDATE_ORDERBOOK",
                items: response,
            });
        });
    }
}