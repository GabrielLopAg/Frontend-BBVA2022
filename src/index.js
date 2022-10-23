import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);
// Amplify.configure({
//   Auth: {
//     identityPoolId: 'us-east-2:8e01621b-7487-4447-b9ce-ea1b8a183a9d',
//     region: 'US-EAST-2'
//   },
//   Storage: {
//     AWSS3: {
//       bucket: 'serverless-dataset-storage',
//       region: 'US-EAST-2'
//     }
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
