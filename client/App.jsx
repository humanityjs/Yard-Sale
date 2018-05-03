import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './scss/main.scss';

/**
* App.jsx: main entry file
* @since: v.1.0.0
*/
const App = () => {
  return (
    <div className="home container-fluid">
      <header className="section jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h2>Andela Yard Sale!!</h2>
        </div>
      </header>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
