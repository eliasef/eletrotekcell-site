import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/routes/Home';
import Contact from './components/routes/Contact';
import AboutUs from './components/routes/AboutUs';
import Services from './components/routes/Services';
import ErrorPage from './components/pages/ErrorPage';
import ContactDetails from './components/routes/ContactDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <AboutUs />
      },
      {
        path: "/servicos",
        element: <Services />
      },
      {
        path: "/contato",
        element: <Contact />
      },
      // nested routes - identificador único
      {
        path: "/contato/:id",
        element: <ContactDetails />,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
