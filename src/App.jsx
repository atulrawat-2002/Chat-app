import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Profile from "./pages/Profile"



function App() {

  return (
    <div className="bg-[url('/src/assets/bgImage.svg')] bg-contain  " >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile /> } />
      </Routes>
    </div>
  )
}

export default App
