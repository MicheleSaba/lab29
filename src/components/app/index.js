import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../main';
import Story from '../story';
import './style.css'

export default class App extends React.Component {
  render() {
    return (
      <div className= "App">
        <Router>
          <Link to="/story"> Story </Link>
          <Link to="/">Home</Link>
          <Route exact path="/" component={Main} />
          <Route exact path="/story" component={Story} />
        </Router>
      </div>
    );
  }
}
