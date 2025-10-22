// Phát hiện lỗi trong dev mode
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
//Cho phép điều hướng trang
import { BrowserRouter } from 'react-router-dom';
//Cho phép dùng Redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
//Cuộn lên đầu khi đổi trang
import { ScrollToTop } from '@/routes/ScrollToTop';
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);