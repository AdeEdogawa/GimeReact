import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import LoginPage from './pages/LoginPage'
import DetailPage from './pages/DetailPage'
import SalesPage from './pages/SalesPage'



function App() {
 return (
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/aboutpage' Component={AboutPage} />
    <Route path='/newspage' Component={NewsPage} />
    <Route path='/loginpage' Component={LoginPage} />
    <Route path='/detailpage' Component={DetailPage} />
    <Route path='/salespage' Component={SalesPage} />
  </Routes>
 )
}

export default App
