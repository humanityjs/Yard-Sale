import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import router from './router';
import 'bootstrap';
import './scss/main.scss';

/**
* App.jsx: main entry file
* @since: v.1.0.0
*/
const App = () => {
  return (
    <div className="home">
      <Router>
        <div>
          <Switch>
            {
              router.map((route) => (
                <Route
                  path={route.path}
                  name={route.name}
                  exact={route.exact}
                  component={route.component}
                  key={route.path}
                >
                </Route>
              ))
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
