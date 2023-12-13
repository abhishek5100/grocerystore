import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cartitem from './Contents/Cartitem'
import App from './App'
import Navbar from './Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './Stores/store'

export default function Nextpage() {

  return (
   <>
   <Provider store={store}>
   <Navbar/>
   <Routes>
<Route path="/" element={<App/>}/>
 <Route path="/cart" element={<Cartitem/>}/>
   </Routes>
   </Provider>

   </>
  )
}
