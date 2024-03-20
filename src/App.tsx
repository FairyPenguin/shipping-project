// -----------------| Imports |-----------------

// CSS Imports
import './App.css'
import { theme } from "./theme";
import '@mantine/core/styles.css';

// Components & Providers Imports
import { MantineProvider } from '@mantine/core';
import {
  createBrowserRouter,
  RouterProvider, Route, createRoutesFromElements
} from "react-router-dom";

// Pages Imports
import HomePage from "@pages/Home/HomePage";
import LoginPage from '@pages/LoginPage/LoginPage';
import AuthLayout from '@layouts/AuthLayout';
// import MainLayout from './components/UiComponents/MainLayout/MainLayout';

//Main Router
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<AuthLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Route >
  ))

function App() {

  return (

    // Mantine Lib Provider
    <MantineProvider theme={theme}>

      {/* Router Provider */}
      <RouterProvider router={router} />

    </MantineProvider>


  )
}

export default App
