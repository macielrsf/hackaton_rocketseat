import * as types from '../constants';

const INITIAL_STATE = {
    loading_login: false,
    user: null,
    password: null
}

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.CHANGE_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case types.CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.password
            }
        }
        case types.LOADING_LOGIN: {
            return {
                ...state,
                loading_login: action.payload
            }
        }
        default: 
            return state;
    }
}
