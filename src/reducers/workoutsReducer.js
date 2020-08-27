import { 
    GET_WORKOUTS_START,
    GET_WORKOUTS_SUCCESS,
    GET_WORKOUTS_ERROR,
    SEARCH_WORKOUTS
 } from '../actions/workoutsActions'
 import { 
    UPDATETRUE,
    UPDATEFALSE
  } from '../actions/usersActions'

const initState = {
    error: "",
    loading: false,
    shouldUpddate: false,
    workouts: [],
    searchedWorkouts: []
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
                workouts: action.payload
            }
        
        case GET_WORKOUTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case SEARCH_WORKOUTS:
            return {
                ...state,
                searchedWorkouts: action.payload
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