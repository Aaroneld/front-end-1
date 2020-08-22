import {
    GET_USER_START, 
    GET_USER_SUCCESS, 
    GET_USER_ERROR,
    UPDATETRUE,
    UPDATEFALSE,
} from '../actions/tempActions1'

const initState = {
    error: "",
    loading: false,
    shouldUpdate: false,
    members: [],
    coaches: [],
}

export function tempReducer1(state = initState, action){
    switch(action.type){

        case GET_USER_START:
            return {
                ...state,
                loading: true
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                tempArr: [...state.tempArr, action.payload]
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