import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import reducer from './reducers';

export const store = createStore(reducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
