import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactDigital from 'react-digital';

const EMPTY = '';


export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  get items(){
    const { value } = this.props;
    return value.split(EMPTY);
  }

  render(){
    const { className, ...props } = this.props;
    const items = this.items;
    return (
      <div {...props} className={classNames('react-digital-numeric',className)}>
        {
          items.map((item, index)=>{
            return (
              <ReactDigital key={index} value={item} />
            )
          })
        }
      </div>
    );
  }
}
