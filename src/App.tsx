import * as React from 'react';
import './App.css';
import Login from './pages/Login';
import Menu from './pages/Menu';
import LoginStore from './core/store/LoginStore';
import { observer } from 'mobx-react';

export interface IAPP {
  loginStore: LoginStore;
}

@observer
class App extends React.Component<IAPP> {

  logined = () => {
    this.props.loginStore.changeLoginState();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.loginStore.isLogined === false
            ? <Login logined={this.logined}/>
            : <Menu />
          }
        </header>
      </div>
    );

  }
}

export default App;