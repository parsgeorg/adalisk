import { history } from './history';
import { appStore } from './stores/appStore';

const LS_AUTH_KEY = 'isUserAuth';

const isAuthorized = () => localStorage.getItem(LS_AUTH_KEY) !== null;

const login = () => {
  localStorage.setItem(LS_AUTH_KEY, 'yes');
  appStore.setIsAuthorized(true);
  history.push('/products');
};

const logout = () => {
  localStorage.removeItem(LS_AUTH_KEY);
  appStore.setIsAuthorized(false);
  history.push('/login');
};

export { isAuthorized, login, logout };
