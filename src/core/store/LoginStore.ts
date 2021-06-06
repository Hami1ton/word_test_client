import { observable, action, makeObservable } from "mobx"

class LoginStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  isLogined = false;

  @action
  changeLoginState() {
    this.isLogined = true;
  }

}

export default LoginStore;