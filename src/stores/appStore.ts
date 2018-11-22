import { action, observable } from 'mobx';

export class AppStore {
  @observable isAuthorized = localStorage.getItem('isUserAuth') !== null;
  @action setIsAuthorized = (value: boolean) => (this.isAuthorized = value);
}

export const appStore = new AppStore();
