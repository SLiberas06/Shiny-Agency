import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Footer from './components/Footer'
import { ThemeProvider } from './utils/context'
import  GlobalStyle  from './utils/style/GlobalStyle'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <GlobalStyle/>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results/>
        </Route>
        <Route path="/freelances">
          <Freelances/>
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer/>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
