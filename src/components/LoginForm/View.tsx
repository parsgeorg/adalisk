import React from 'react';
import { Data, Handlers } from './types';

type Props = Data & Handlers;

const View: React.SFC<Props> = props => (
  <form onSubmit={props.submit}>
    <div className="row">
      <div className="medium-5 columns left">
        <label>UserName</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={props.changeUsername}
          value={props.username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={props.changePassword}
          value={props.password}
        />
        <button className="button success">Login</button>
      </div>
    </div>
  </form>
);

export default View;
