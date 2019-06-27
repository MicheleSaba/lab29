import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from '../main';
import Story from '../story';
import Character from '../character';
import './style.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/story"> Story </Link>
          <Link to="/">Home</Link>
          <Link to="/character">Character</Link>
          <Route exact path="/" component={Main} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/character" component={Character} />
        </Router>
      </div>
    );
  }
}
