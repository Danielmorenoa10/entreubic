import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element= {<h1>home page</h1>} />
        <Route path= '/login' element= {<h1>{<LoginPage/>}</h1>} />
        <Route path= '/register' element= {<h1>{<RegisterPage/>}</h1>} />
        <Route path= '/tasks' element= {<h1>Task page</h1>} />
        <Route path= '/tasks/:id' element= {<h1>new task</h1>} />
        <Route path= '/profile' element= {<h1>profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App