import React, { Component } from 'react';
import Navigation from "./components/navigation/Navigation";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (<Router>
    <div className="App">
          <Navigation></Navigation>
    </div>
    </Router>);
  }
}

export default App;
