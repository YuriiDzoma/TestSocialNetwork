import {combineReducers, legacy_createStore as createStore} from "redux";
import navigationReducer from "./navigation-reducer";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    navigation: navigationReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
});

let store = createStore(reducers);

export default store;
