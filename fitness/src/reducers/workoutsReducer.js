import { 
    GET_WORKOUTS_START,
    GET_WORKOUTS_SUCCESS,
    GET_WORKOUTS_ERROR
 } from '../actions/workoutsActions'
 import { 
    UPDATETRUE,
    UPDATEFALSE
  } from '../actions/usersActions'

const initState = {
    error: "",
    loading: false,
    shouldUpddate: false,
    workouts: []
}

export function workoutsReducer(state = initState, action){
    switch(action.type){

        case GET_WORKOUTS_START:
            return {
                ...state,
                loading: true
            }

        case GET_WORKOUTS_SUCCESS:
            return {
                ...state,
                loading: false,
                workouts: [...state.workouts, action.payload]
            }
        
        case GET_WORKOUTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case UPDATETRUE:
            return {
                ...state,
                shouldUpddate: action.payload
            }

        case UPDATEFALSE:
            return {
                ...state,
                shouldUpddate: action.payload
            }

        default:
            return state
    }
}