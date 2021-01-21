import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

Home.propTypes = {
  
};

function Home(props) {
  const match = useRouteMatch()
  
  return (
    <h1>Index page</h1>
  );
}

export default Home;