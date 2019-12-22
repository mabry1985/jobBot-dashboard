import React from 'react';
import GraphContainer from './components/graphs/GraphContainer';
import './App.css';
import ResultsContainer from './components/results/ResultsContainer';


class App extends React.Component {
  

  render(){
    return (
      <div className="App">
        <ResultsContainer/>
        <GraphContainer/>
      </div>
    );
  }
}

export default App;
