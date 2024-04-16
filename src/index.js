import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function App() {
//   // const container = document.createElement("div");
//   // container.innerText = "Hello World";
//   // return container;
//   // return React.createElement('div', {}, "Hello World");

//   return <div>Hello world</div>
// }

// // const root = document.getElementById("root");

// // root.appendChild(App());

// ReactDOM.render(<App/>, document.getElementById("root"));