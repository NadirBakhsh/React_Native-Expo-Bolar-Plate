use in App.js


import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistor} from './store' 

 <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
	Navigation components
  </PersistGate>
  </Provider>