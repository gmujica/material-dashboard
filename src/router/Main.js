import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Album from '../pages/Album'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/login' component={Login}/>
      <Route path='/album' component={Album}/>
    </Switch>
  </main>
)

export default Main
