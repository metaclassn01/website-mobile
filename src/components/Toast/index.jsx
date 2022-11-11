import classNames from 'classnames';
import React from 'react';
import renderTo from 'utils/renderTo';

import styles from './index.module.scss';

let timer = null;
let destroy = null;
const defaultOptions = {
  msg: '',
  position: 'middle',
  timeout: 3000,
  isMultiple: false,
};

const Toast = ({ position, msg }) => {
  return (
    <div className={classNames(styles.toast, styles[position])}>
      <span dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

/**
 *
 * @param {String | Object} options
 */
const render = (options) => {
  const props =
    typeof options === 'string'
      ? { ...defaultOptions, msg: options }
      : { ...defaultOptions, ...options };

  if (!props.isMultiple) {
    if (timer) {
      clearTimeout(timer);
    }

    if (destroy) {
      destroy();
    }
  }

  const res = renderTo(<Toast {...props} />);

  destroy = res.destroy;

  timer = setTimeout(destroy, props.timeout);
};

export default render;
