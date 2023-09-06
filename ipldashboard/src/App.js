import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
  <h1>hellooo</h1>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
)

export default App
