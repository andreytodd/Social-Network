import {combineReducers, legacy_createStore} from "redux"
import profileReducer from './profile-reducer.mjs'
import dialogsReducer from './dialogs-reducer.mjs'
import sidebarReducer from './sidebar-reducer.mjs'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = legacy_createStore(reducers);

export default store