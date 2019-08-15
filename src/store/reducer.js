import {combineReducers} from 'redux'

import headReducer from '../components/head/headStore/headReducer'
import homeReducer from '../components/home/homeStore/homeReducer'
import detailReducer from '../components/detail/detailStore/detailReducer'

export default combineReducers({
    head:headReducer,
    home:homeReducer,
    detail:detailReducer
})