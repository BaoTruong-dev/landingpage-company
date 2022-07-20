const initialValue = {
    data: []
};

const infoReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'GET_INFO':
            return {
                ...state,
                data: action.payload
            };
    }
    return state;
};

export default infoReducer;