import { axiosAuth } from '../utilities/apiUtilities'

export const GET_WORKOUTS_START = "GET_WORKOUTS_START"
export const GET_WORKOUTS_SUCCESS = "GET_WORKOUTS_SUCCESS"
export const GET_WORKOUTS_ERROR = "GET_WORKOUTS_ERROR"
export const getWorkouts = () => (dispatch) => {
    dispatch({ type: GET_WORKOUTS_START })

    axiosAuth().get("https://anywhere-fitness-team2.herokuapp.com/api/auth/users/classes")
    .then(res => {
        console.log(res.data)
        dispatch({ type: GET_WORKOUTS_SUCCESS, payload: res.data.data })
    })
    .catch(err => {
        console.dir(err)
        dispatch({ type: GET_WORKOUTS_ERROR, payload: "An error has occured." })
    })
}

export const SEARCH_WORKOUTS  = "SEARCH_WORKOUTS"
export const searchWorkout = terms => {
    return { type: SEARCH_WORKOUTS, payload: terms }
}