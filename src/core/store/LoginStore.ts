import { observable, action, makeObservable } from "mobx"

class LoginStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  isLogined = false;

  userId: string = "";

  @action
  changeLoginState() {
    this.isLogined = true;
  }

  saveUserId(id: string) {
    this.userId = id;
  }

}

export default LoginStore;