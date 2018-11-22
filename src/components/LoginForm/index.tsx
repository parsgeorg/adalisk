import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { login } from '../../session';
import { Data, Handlers } from './types';
import View from './View';

const isValidUser = ({ username, password }: Data) => username === 'admin' && password === '123';

@observer
class LoginForm extends React.Component implements Data, Handlers {
  @observable username = '';
  @observable password = '';
  @observable loginHasFailed = false;

  @action setUsername = (value: string) => (this.username = value);
  @action setPassword = (value: string) => (this.password = value);
  @action setLoginHasFailed = (value = true) => (this.loginHasFailed = value);

  changeUsername: Handlers['changeUsername'] = e => this.setUsername(e.currentTarget.value);

  changePassword: Handlers['changePassword'] = e => this.setPassword(e.currentTarget.value);

  submit: Handlers['submit'] = e => {
    e.preventDefault();
    isValidUser(this) ? login() : this.setLoginHasFailed();
  };

  render() {
    return (
      <>
        <p>{this.loginHasFailed && <span>Пользователь с такими данными не найден!</span>}</p>
        <View
          username={this.username}
          password={this.password}
          changeUsername={this.changeUsername}
          changePassword={this.changePassword}
          submit={this.submit}
        />
      </>
    );
  }
}

export default LoginForm;
