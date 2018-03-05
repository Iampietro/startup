import React, { Component } from 'react';
import AppContainer from './containers/Container.js';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <div className="column full">
            <div className="row">
                <AppContainer /> 
            </div>
        </div>
      </div>
    );
  }
}

export default App;  
