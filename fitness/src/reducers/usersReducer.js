import {
    GET_USER_START, 
    GET_USER_SUCCESS, 
    GET_USER_ERROR,
    UPDATETRUE,
    UPDATEFALSE,
} from '../actions/usersActions'

const initState = {
    error: "",
    loading: false,
    shouldUpdate: false,
    users: [],
    instructors: [],
}

export function usersReducer(state = initState, action){
    switch(action.type){

        case GET_USER_START:
            return {
                ...state,
                loading: true
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case UPDATETRUE:
            return {
                ...state,
                shouldUpdate: action.payload
            }

        case UPDATEFALSE:
            return {
                ...state,
                shouldUpdate: action.payload
            }

        default:
            return state
    }
}