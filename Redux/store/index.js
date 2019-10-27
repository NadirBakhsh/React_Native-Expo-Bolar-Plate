import rootReducer from './reducer/reducer';			
import {createStore, applyMiddleware} from 'redux';	
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';			

const persistConfig = {
    key: 'root',
    storage,
     blacklist : ['userAuth'],
    // whitelist : ['root']
}

const persistedReducer = persistReducer(persistConfig , rootReducer);
const store = createStore(				
    persistedReducer,										
    {},							
    applyMiddleware(thunk)				
);	

const persistor = persistStore(store);

export  {persistor , store};



// import reducer from './reducer/reducer'

// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';	

// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;