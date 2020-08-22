import { combineReducers } from 'redux'
import { tempReducer1 } from './tempReducer1'
import { tempReducer2 } from './tempReducer2'

export const rootReducer = combineReducers({
    tempReducer1,
    tempReducer2
})