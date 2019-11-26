import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import LoginReducer from '~/screens/auth/login/reducers';
import CoursesReducer from '~/screens/core/courses/reducers';

const loginPersistConfig = {
    key: 'login',
    storage: AsyncStorage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    LoginReducer: persistReducer(
        loginPersistConfig,
        LoginReducer
    ),
    CoursesReducer
});

export default () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);

    return { store, persistor };
}
