const initialValue = {
    data: [],
};

const serviceReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'GET_SERVICE':
            return {
                ...state,
                data: action.payload
            };
            default:
                return state;
    }
 
};

export default serviceReducer;