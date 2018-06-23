# react-digital-numeric
> Numeric &amp; time &amp; date use react digital

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-digital-numeric --registry=https://registry.npm.taobao.org
```

```js
import ReactDigitalNumeric from 'react-digital-numeric';
```

```scss
// customize your styles:
$react-digital-numeric-options:(
);

@import 'node_modules/react-digital-numeric/dist/style.scss';
```


## usage:
```jsx

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

```
