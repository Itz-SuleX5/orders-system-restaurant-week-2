import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/pages/login'
import SignUp from './components/pages/signUp'
import Admin from './components/pages/admin'
import TablesPage from './components/pages/tables'
import ProtectedRoute from './components/ProtectedRoute'
import NewOrder from './components/pages/newOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route path="/admin/tables" element={<ProtectedRoute><TablesPage/></ProtectedRoute>}/>
      <Route path="/admin/newOrder" element={<ProtectedRoute><NewOrder/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
