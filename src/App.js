import React from 'react';
import GraphContainer from './components/graphs/GraphContainer';
import NavBar from './components/NavBar';
import './App.css';
import ResultsContainer from './components/results/ResultsContainer';
import { Column, Row } from "simple-flexbox";

const App = () => {
  return (
    <div>
      <NavBar />
      <Column flexGrow={1} style={{ margin: 40 }}>
        <Row vertical="center" wrap="true">
          <Column flexGrow={1} horizontal="center">
            <ResultsContainer />
          </Column>
          <Column flexGrow={1} horizontal="center">
            <GraphContainer />
          </Column>
        </Row>
      </Column>
    </div>
  );
}

export default App;
