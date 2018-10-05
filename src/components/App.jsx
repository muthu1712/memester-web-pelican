import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import Home from './Home'

const reducer = (initialState = 'Hello World') => {
    return initialState;
}
const store = createStore(reducer);
class App extends React.Component{
    render(){
        return(
           <Provider store ={store}>
                <Home />
           </Provider>
        )
    }
}

export default App;
