import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { appStore } from './stores/appStore';
import './styles/custom.css';
import './styles/foundation.min.css';

const App = () => (
  <div className="off-canvas-wrapper">
    <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      <div className="off-canvas-content" data-off-canvas-content>
        <Header appStore={appStore} />
        <Main />
        <hr />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
