import React from 'react'
import {
    Outlet
  } from "react-router-dom";
import Header from './Header';
const Layout = () => {
  return (
    <div>
       <Header/>
        <Outlet/>
        {/* <footer>footer</footer> */}
    </div>
  )
}

export default Layout