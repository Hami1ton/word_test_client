import * as React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Menu from './pages/Menu';


class App extends React.Component {
  
  isLoggedIn: boolean = false;

  logined = () => {
    this.isLoggedIn = true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {!this.isLoggedIn
            ? <Login logined={this.logined}/>
            : <Menu />
          }
        </header>
      </div>
    );

  }
}

export default App;