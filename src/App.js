import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
//
const Home = () => (
    <div>
        <h2>
            Navigate to Routes using / => home & /about => about
        </h2>
    </div>
);


const NoMatch = () => (
    <div>
        <h2>NoMatch</h2>
    </div>
);
class App extends Component {
  render() {
    return (
        <Router>

            <Switch>
                {/*<Layout path="/users" component={Users}/>*/}
                {/*<Layout exact path="/" component={CreateUser}/>*/}
                <Route path="/about" component={About}/>
                <Route exact path="/" component={Home}/>
                {/*<Layout path="/create_user" component={CreateUsers}/>*/}
                {/*<Route path="/create_user" component={Contact}/>*/}
                <Route component={NoMatch} />
            </Switch>

        </Router>

    );
  }
}

export default App;
