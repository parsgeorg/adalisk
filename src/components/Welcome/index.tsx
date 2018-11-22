import React, { Component } from 'react';
import styled from 'styled-components';
import './styles.css';

const h2 = styled.input.attrs({})`
  color: red !important;
`;

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h2 id="welcomeText">Добро пожаловать на сайт!</h2>
        </div>
      </div>
    );
  }
}

export default Welcome;
