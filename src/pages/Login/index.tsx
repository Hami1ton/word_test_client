import * as React from 'react';
import ApiRequestUtil from '../../util/ApiRequestUtil';
import { LoginInfo } from './LoginInfo';
import TextInput from '../../core/component/TextInput';

class Login extends React.Component {

  loginInfo = new LoginInfo();

  onSubmit = async () => {
    const result = ApiRequestUtil.login(this.loginInfo.request);
    console.log(result);
  }

  updateUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.loginInfo.userId = event.target.value;
  }

  updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.loginInfo.password = event.target.value;
  }

  render() {
    return (
      <div className="Login">
          <p>
              Please Login!
          </p>
          UserId
          <TextInput 
            value={this.loginInfo.userId} 
            onChange={(e) => this.updateUserId(e)}
          />
          Password
          <TextInput 
            value={this.loginInfo.password} 
            onChange={(e) => this.updatePassword(e)}
          />
          <button onClick={this.onSubmit}>
            Login
          </button>
      </div>
    );

  }
}

export default Login;
