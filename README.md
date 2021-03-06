# react-digital-numeric
> Numeric & time & date use react digital.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-digital-numeric
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | any    | false    | -       | Default value.                        |
| onChange  | func   | false    | -       | The change handler.                   |
| flat      | bool   | false    | -       | If digit equal width.                 |


## usage
1. import css
  ```scss
  @import "~@jswork/react-digital-numeric/dist/style.css";

  // or use sass
  @import "~@jswork/react-digital-numeric/dist/style.scss";

  // customize your styles:
  $react-digital-numeric-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactDigitalNumeric from '@jswork/react-digital-numeric';
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

  ```

## documentation
- https://afeiship.github.io/react-digital-numeric/


## license
Code released under [the MIT license](https://github.com/afeiship/react-digital-numeric/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-digital-numeric
[version-url]: https://npmjs.org/package/@jswork/react-digital-numeric

[license-image]: https://img.shields.io/npm/l/@jswork/react-digital-numeric
[license-url]: https://github.com/afeiship/react-digital-numeric/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-digital-numeric
[size-url]: https://github.com/afeiship/react-digital-numeric/blob/master/dist/react-digital-numeric.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-digital-numeric
[download-url]: https://www.npmjs.com/package/@jswork/react-digital-numeric
