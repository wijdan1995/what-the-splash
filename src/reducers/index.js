import loadingReducer from './loadingReducer'
import imagesReducer from './imagesReducer'
import errorReducer from './errorReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer
})

export default rootReducer