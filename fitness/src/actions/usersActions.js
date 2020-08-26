import axios from 'axios'

export const UPDATETRUE = "UPDATETRUE"
export const updateTrue = () => (dispatch) => {
    dispatch({ type: UPDATETRUE, payload: true})
}
export const UPDATEFALSE = "UPDATEFALSE"
export const updateFalse = () => (dispatch) => {
    dispatch({ type: UPDATEFALSE, payload: false})
}

export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_ERROR = "GET_USER_ERROR"
export const getUser = () => (dispatch) => {
    dispatch({ type: GET_USER_START })

    axios.get("https://reqres.in/api/users/3")
    .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data.data })
    })
    .catch((err) => {
        console.dir(err)
        dispatch({ type: GET_USER_ERROR, payload: "An error occured"})
    })
}