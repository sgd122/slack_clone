import App from '@layouts/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);

// pages - 서비스 페이지
// components - 컴포넌트
// layouts - 공통 레이아웃
