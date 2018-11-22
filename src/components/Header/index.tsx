import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { login, logout } from '../../session';
import { AppStore } from '../../stores/appStore';
import './styles.css';

interface Props {
  appStore: AppStore;
}

@observer
class Header extends Component<Props> {
  render() {
    return (
      <div className="callout primary" id="Header">
        <div className="row column">
          <h1>Адалиск</h1>
          {!this.props.appStore.isAuthorized ? (
            <button className="button success" onClick={login}>
              Login
            </button>
          ) : (
            <button className="button success" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
