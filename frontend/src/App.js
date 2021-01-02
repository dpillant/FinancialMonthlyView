import React from 'react';
import Month from './components/Month/Month'

const App = () => {
  var currentDate= new Date();
  const accountLines={
    "accountLines":{
      "1":{
        "id":"1",
        "date":"01/01/2021",
        "label":"salaire",
        "credit":"1000.00",
        "debit":"0.00"
      },
      "2":{
        "id":"2",
        "date":"01/01/2021",
        "label":"EDF",
        "credit":"0.00",
        "debit":"30.00"
      },
      "3":{
        "id":"3",
        "date":"01/01/2021",
        "label":"test",
        "credit":"50.00",
        "debit":"0.00"
      }
      }
  };
  console.log("App.js",accountLines);
  console.log("App.js",currentDate);
  return <Month mainDate={currentDate} accountLines={accountLines}/>;
};

export default App;
 