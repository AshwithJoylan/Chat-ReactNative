import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export {store, persistor};
