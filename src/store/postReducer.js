const initialValue = {
    data: [],

};

const postReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return {
                ...initialValue,
                data: action.payload
            };
        default:
            return state;
    }
};

export default postReducer;