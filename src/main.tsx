import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import ShoppingCartMain from './Components/ShopingCartMain/ShoppingCartMain.tsx'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart.tsx'
import DeliveryForm from './Pages/DeliveryForm/DeliveryForm.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCart />,
  },
  {
    path: "/deliveryForm",
    element: <DeliveryForm />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
