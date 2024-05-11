import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Image from './Ima/Image1'
import './App.css'
import Content from './Content/Content'
import NewCoinForm from './NewCoinForm/Newform'
function App() {
  

  return (
    <div>
    <Router>
      <Routes>
      <Route  path='/' element={
        <>
          <Navbar/>
          <Content/>
          <Image/>
        </>
      }
      />
      <Route path='/newcoinform'
      element={
        <>
        <Navbar/>
        <NewCoinForm/>
        </>
      }
      />

      </Routes>
    </Router>
    </div>
  )
}

export default App
