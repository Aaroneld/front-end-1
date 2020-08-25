import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { workoutsReducer } from './workoutsReducer'

export const rootReducer = combineReducers({
    usersReducer,
    workoutsReducer
})