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

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/tables" element={<TablesPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
