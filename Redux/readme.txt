use in App.js


import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistor} from './store' 

 <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
	Navigation components
  </PersistGate>
  </Provider>


////////////////////////
use where u want to use redux

import { connect } from 'react-redux'


//geting data
function mapStateToProps(state) {
    return {
        user: state.user
    }
}


///Update Data
function mapDispatchToProps(dispatch) {
    return {
        store_users_data: (userInfo) => dispatch(update_user(userInfo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpScrren);




