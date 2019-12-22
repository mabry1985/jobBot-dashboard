import React from 'react';
import GraphContainer from './components/graphs/GraphContainer';
import './App.css';
import ResultsContainer from './components/results/ResultsContainer';
import { Column, Row } from "simple-flexbox";


class App extends React.Component {
  
  render(){
    return (
      <Column flexGrow={1}>
        <Row horizontal="center">
          <h1 style={{ marginBottom: 20}}>jobBot</h1>
        </Row>
        <Row vertical="center">
          <Column flexGrow={1} horizontal="center">
            <ResultsContainer />
          </Column>
          <Column flexGrow={1} horizontal="center">
            <GraphContainer />
          </Column>
        </Row>
      </Column>
    );
  }
}

export default App;
