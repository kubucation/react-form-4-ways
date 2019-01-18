import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HTMLForm from './HTMLForm';
import ControlledForm from './ControlledForm';
import ReduxForm from './ReduxForm';
import FinalForm from './FinalForm';
import HTMLFormSummary from './summary/HTMLForm';
import ControlledFormSummary from './summary/ControlledForm';
import ReduxFormSummary from './summary/ReduxForm';
import FinalFormSummary from './summary/FinalForm';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import './App.css';

const Index = () => (
  <div>
    <h2>Mini-Course Overview</h2>
    <nav>
      <ol>
        <li>
          <Link to="/html-form/">Native HTML-like Form</Link>
        </li>
        <li>
          <Link to="/controlled-form/">Controlled Form</Link>
        </li>
        <li>
          <Link to="/redux-form/">Redux Form</Link>
        </li>
        <li>
          <Link to="/final-form/">Final Form</Link>
        </li>
      </ol>
    </nav>
  </div>
);

const reducers = combineReducers({form: formReducer});

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="header">
            <span className="logo">kubucation</span>
            <span className="title">4 Ways to manage form state in React</span>
          </header>
          <Router>
            <div style={{padding: 20}}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/html-form/summary" component={HTMLFormSummary} />
                <Route
                  path="/controlled-form/summary"
                  component={ControlledFormSummary}
                />
                <Route
                  path="/redux-form/summary"
                  component={ReduxFormSummary}
                />
                <Route
                  path="/final-form/summary"
                  component={FinalFormSummary}
                />
                <Route path="/html-form/" component={HTMLForm} />
                <Route path="/controlled-form/" component={ControlledForm} />
                <Route path="/redux-form/" component={ReduxForm} />
                <Route path="/final-form/" component={FinalForm} />
              </Switch>
              <Link to="/">Back to Overview</Link>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
