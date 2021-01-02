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
        "debit":"0.00",
        "monthly":"true",
        "createdDate":"01/01/2021",
        "modifiedDate":"01/01/2021"
      },
      "2":{
        "id":"2",
        "date":"01/01/2021",
        "label":"EDF",
        "credit":"0.00",
        "debit":"30.00",
        "monthly":"true",
        "createdDate":"01/01/2021",
        "modifiedDate":"01/01/2021"
      },
      "3":{
        "id":"3",
        "date":"01/01/2021",
        "label":"test",
        "credit":"50.00",
        "debit":"0.00",
        "monthly":"true",
        "createdDate":"01/01/2021",
        "modifiedDate":"01/01/2021"

      }
      }
  }
  const totalAmount={
    "monthlyDebit":"1000.00",
    "monthlyCredit":"1500.00",
    "monthlyExtraDebit":"300.00",
    "monthlyExtraCredit":"500.00"
  };
  return <Month mainDate={currentDate} accountLines={accountLines} totalAmount={totalAmount}/>;
};

export default App;
 