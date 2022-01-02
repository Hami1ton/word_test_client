import * as React from 'react';
import ApiRequestUtil from '../../util/ApiRequestUtil';
import { LoginInfo } from './LoginInfo';
import TextInput from '../../core/component/TextInput';
import LoginStore from '../../core/store/LoginStore';

export interface ILogin {
  loginStore: LoginStore;
}

class Login extends React.Component<ILogin> {

  loginInfo = new LoginInfo();

  onSubmit = async () => {
    const res = await ApiRequestUtil.login(this.loginInfo.request);
    if (res.result === 'success') {
      this.props.loginStore.changeLoginState();
      this.props.loginStore.saveUserId(this.loginInfo.userId);

    } else {
      console.error(res);
    }
  }

  updateUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
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
