import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';

interface Props {}

const state = {
  username: '',
  password: '',
  email: '',
  name: '',
};

type State = typeof state;

class Signup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = state;

    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    if (this.state.username && this.state.password && this.state.email && this.state.name) {
      // TODO: "create user" api request
    }
  }

  onChange() {
    //this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (sessionStorage.getItem('userData')) {
      return <Redirect to={'/home'} />;
    }

    return (
      <div className="row " id="Body">
        <div className="medium-5 columns left">
          <h4>Signup</h4>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" onChange={this.onChange} />
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" onChange={this.onChange} />
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={this.onChange} />
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={this.onChange} />

          <input type="submit" className="button" value="Sign Up" onClick={this.signup} />
          <a href="/login">Login</a>
        </div>
      </div>
    );
  }
}

export default Signup;
