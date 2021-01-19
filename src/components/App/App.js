import React from 'react';
import './App.css';
import Calculator from '../Calculator/Calculator';
import Table from '../Table/Table';
import Articles from '../Articles/Articles';
import Recommendations from '../Recommendations/Recommendations';

function App() {
  return (
    <div className="page">
      <Calculator />
      <Table />
      <Recommendations />
      <Articles />
    </div>
  );
}

export default App;
