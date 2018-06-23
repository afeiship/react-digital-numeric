import './dev.scss';
import ReactDigitalNumeric from './main';

/*===example start===*/

// install: npm install afeiship/react-digital-numeric --save
// import : import ReactDigitalNumeric from 'react-digital-numeric'

class App extends React.Component{

  state = {

  };

  constructor(props){

    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){

    return (
      <div className="hello-react-digital-numeric">
        <ReactDigitalNumeric value='2018-12-08' ref='rc' />
        <div className="blank-20"/>
        <ReactDigitalNumeric value='14:20:12.120' ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);