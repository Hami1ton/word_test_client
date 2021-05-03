import * as React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

class App extends React.Component {

  render() {

    const isLoggedIn: boolean = false;

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {!isLoggedIn
            ? <Login />
            : ''
          }
        </header>
      </div>
    );

  }
}

export default App;