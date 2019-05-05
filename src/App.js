import React from 'react';
import Meteors from './Meteors';
import TabView from './tabs/TabView';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="background col" style={{justifyContent: 'center', alignItems: 'center'}}>
        <Meteors />
        <TabView />
      </div>
    );
  }
}

export default App;
