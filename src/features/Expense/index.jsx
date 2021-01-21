import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
// import PropTypes from 'prop-types';
import MainPage from './pages/Main'
import InsertPage from './pages/Insert'
import NotFound from '../../components/NotFound'

Expense.propTypes = {
  
}

function Expense(props) {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route exact path={match.url} component={MainPage}/>
      <Route path={`${match.url}/add`} component={InsertPage}/>
      <Route path={`${match.url}/:id`} component={InsertPage}/>
      <Route component={NotFound}/>
    </Switch>
  )
}

export default Expense