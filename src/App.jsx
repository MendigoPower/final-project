import 'semantic-ui-css/semantic.min.css'
import {Route, Routes} from 'react-router-dom'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/Footer'
import Home from './components/Home/Home'
import GamePage from './components/GamePage/GamePage'
import SearchPage from './components/shared/SearchPage'
import SignUp from './components/shared/SignUp'
import AuthProvider from './context/AuthContext'
import Profile from './components/Profile/Profile'
import Login from './components/shared/Login'
function App() {
  return (
    <div className="bg-not-white flex flex-col">
      
    <AuthProvider>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game/:id' element={<GamePage/>}/>
        <Route path='/search/:name' element={<SearchPage/>}/>
        <Route path='/search/' element={<SearchPage/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />
    </AuthProvider>
    </div>
  )
}

export default App
