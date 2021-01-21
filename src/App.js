import React, { Suspense } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.scss'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

const Home = React.lazy(() => import('./features/Home'))
const Login = React.lazy(() => import('./features/Login'))
const Expense = React.lazy(() => import('./features/Expense'))


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/expense" component={Expense}/>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
