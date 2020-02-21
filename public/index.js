import ReactDigitalNumeric from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactDigitalNumeric value="2018-12-08" ref="rc" />
        <div className="blank-20" />
        <ReactDigitalNumeric value="14:20:12.120" ref="rc" />

        <div className="blank-20" />
        <div className="blank-20" />

        <ReactDigitalNumeric flat value="2018-12-08" ref="rc" />
        <div className="blank-20" />
        <ReactDigitalNumeric flat value="14:20:12.120" ref="rc" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
