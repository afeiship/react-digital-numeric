import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ReactDigital from '@feizheng/react-digital';

const EMPTY = '';
const CLASS_NAME = 'react-digital-numeric';

export default class ReactDigitalNumeric extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.any,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * If digit equal width.
     */
    flat: PropTypes.bool
  };

  get items() {
    const { value } = this.props;
    return value.split(EMPTY);
  }

  render() {
    const { className, flat, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.items.map((item, index) => {
          return <ReactDigital flat={flat} key={index} value={item} />;
        })}
      </div>
    );
  }
}
