import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export type RootState = ReturnType<typeof store.getState>;

root.render(
    <App />
);

