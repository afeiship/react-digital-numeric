import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDigitalNumeric from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-digital-numeric">
        <ReactDigitalNumeric className="mb-2" value="2018-12-08" />
        <hr />
        <ReactDigitalNumeric className="mb-2" value="14:20:12.120" />
        <hr />
        <ReactDigitalNumeric className="mb-2" flat value="2018-12-08" />
        <hr />
        <ReactDigitalNumeric className="mb-2" flat value="14:20:12.120" />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
