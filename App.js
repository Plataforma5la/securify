import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter} from 'react-router-native'

import store from './src/store.js'

import Main from './src/Main';

function App(){
	return(
		<NativeRouter>		
			<Provider store= {store}>
				<Main />
			</Provider>
	  </NativeRouter>
	)
}

export default App;
