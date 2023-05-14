
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Users from './Users'
import User from './User'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/:id" element={<User />} />
    </Routes>
  )
}

export default App
