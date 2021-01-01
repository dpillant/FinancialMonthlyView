import React from 'react';
import Month from './components/Month/Month'

const App = () => {
  var currentDate= new Date();
  return <Month mainDate={currentDate}/>;
};

export default App;
 