import currentUser from './currentUser'
import counter from './counter'
import {combineReducers} from 'redux'
import list4 from './TodoReducer'

const rootReducer = combineReducers({
    currentUser,
    counter,
    list4
})

export default rootReducer