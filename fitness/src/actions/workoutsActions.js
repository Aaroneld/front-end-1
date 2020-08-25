import axios from 'axios'

export const GET_WORKOUTS_START = "GET_WORKOUTS_START"
export const GET_WORKOUTS_SUCCESS = "GET_WORKOUTS_SUCCESS"
export const GET_WORKOUTS_ERROR = "GET_WORKOUTS_ERROR"
export const getWorkouts = () => (dispatch) => {
    dispatch({ GET_WORKOUTS_START})

    axios.get("https://anytime-fitness.herokuapp.com/api/auth/users/classes")
    .then(res => {
        dispatch({ type: GET_WORKOUTS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.dir(err)
        dispatch({ type: GET_WORKOUTS_ERROR, payload: "An error has occured." })
    })
}