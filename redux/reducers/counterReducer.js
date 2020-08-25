import {DECREMENT_COUNTER, INCREMENT_COUNTER , SET_NEW_VALUE} from '../actions/counterActions';

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        case SET_NEW_VALUE:
                return {...state, value: action.value};
        default:
            return {...state};
    }
};

export default counterReducer;
