import PropTypes from 'prop-types';
import React from 'react';

/**
 * @uxpinnamespace Select
 */
export default function SelectItem(props) {
  return (
    <span {...props}>
      {props.children}
    </span>
  );
}

SelectItem.propTypes = {
  /** @uxpinpropname Label */
  children: PropTypes.string,
  onClick: PropTypes.func,
};
