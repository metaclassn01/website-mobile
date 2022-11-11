import cn from 'classnames';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { isWeChatBrowser, judgeClient } from 'utils';

import styles from './index.module.scss';

class Mask extends Component {
  constructor(props) {
    super(props);

    this.node = React.createRef();
    this.scrollTop = window.pageYOffset;
  }

  componentDidMount() {
    const { isDisableWindowScroll } = this.props;

    if (isDisableWindowScroll) {
      // fix: 修复 iOS 微信端，页面不滚到顶部的问题
      if (isWeChatBrowser() && judgeClient() === 'IOS') {
        window.scrollTo(0, 0);
      }

      document.body.setAttribute(
        'style',
        `position:fixed; top: ${-this.scrollTop}px;left:0;right:0;`
      );
    }
  }

  componentWillUnmount() {
    const { isDisableWindowScroll } = this.props;

    if (isDisableWindowScroll) {
      document.body.setAttribute('style', '');
      window.scrollTo(0, this.scrollTop);
    }
  }

  handleClick = (e) => {
    const { isstopPropagation, onClick } = this.props;

    // 阻止冒泡
    if (isstopPropagation) {
      e.stopPropagation();
    }

    if (e.target !== this.node.current || typeof onClick !== 'function') {
      return;
    }

    onClick();
  };

  render() {
    const { className, children } = this.props;

    return ReactDOM.createPortal(
      <div ref={this.node} className={cn(styles.container, className)} onClick={this.handleClick}>
        {children}
      </div>,
      document.body
    );
  }
}

Mask.defaultProps = {
  isstopPropagation: true, // 是否阻止冒泡，默认 true
  isDisableWindowScroll: true, // 是否禁止窗口滚动，默认 true
};

export default Mask;
