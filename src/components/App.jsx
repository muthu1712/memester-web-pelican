import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import Home from './Home';

const store = createStore(reducer);
class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
