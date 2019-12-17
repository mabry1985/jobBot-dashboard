import React from 'react';
import BarGraph from './graphs/BarGraph';
import './App.css';

function App() {
  const data = [
    {
      name: 'Backbone',
      mentions: 2
    },
    {
      name: 'Vue',
      mentions: 5
    },
    {
      name: 'React',
      mentions: 14
    },
    {
      name: 'Angular',
      mentions: 10
    }
  ]
  return (
    <div className="App">
    <BarGraph data={data}/>
    </div>
  );
}

export default App;
