# react-digital-numeric
> Numeric & time & date use react digital.

## installation
```shell
npm install -S @feizheng/react-digital-numeric
```

## update
```shell
npm update @feizheng/react-digital-numeric
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | any    | -       | Default value.                        |
| onChange  | func   | -       | The change handler.                   |
| flat      | bool   | -       | If digit equal width.                 |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-digital/dist/style.scss";
  @import "~@feizheng/react-digital-numeric/dist/style.scss";
  
  // customize your styles:
  $react-digital-numeric-options: ()
  ```
2. import js
  ```js
  import ReactDigitalNumeric from '@feizheng/react-digital-numeric';
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

  ```

## documentation
- https://afeiship.github.io/react-digital-numeric/
