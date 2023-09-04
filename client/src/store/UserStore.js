import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    //mobx will track for those variables
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(bool) {
    this._user = bool;
  }

  //they are computed functions. It is called if the variables have been changed.
  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
