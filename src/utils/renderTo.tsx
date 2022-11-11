import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'reduxStore';

/**
 * 手动渲染组件到对应元素，可用于处理 Mask、Modal 之类组件的层级问题
 * @param {function|Component} fnOrComponent React 组件或者一个返回 React 组件的函数
 * @param {boolean} autoDestroy 页面跳转时自动销毁，默认 true
 * @returns {object} { destroy } 可用于销毁组件
 */
function renderTo(fnOrComponent: any, autoDestroy = true) {
  const rootEl = document.createElement('div');
  document.body.appendChild(rootEl);

  const root = createRoot(rootEl);

  const destroy = () => {
    root.unmount();

    if (rootEl.parentNode) {
      rootEl.parentNode.removeChild(rootEl);
    }

    window.removeEventListener('popstate', destroy);
  };
  if (autoDestroy) {
    window.addEventListener('popstate', destroy, false);
  }

  const child = typeof fnOrComponent === 'function' ? fnOrComponent(destroy) : fnOrComponent;

  root.render(<Provider store={store}>{child}</Provider>);

  return {
    destroy,
  };
}

export default renderTo;
