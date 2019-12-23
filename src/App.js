import React from 'react';
import GraphContainer from './components/graphs/GraphContainer';
import NavBar from './components/NavBar';
import './App.css';
import ResultsContainer from './components/results/ResultsContainer';
import { Column, Row } from "simple-flexbox";
import logo from './images/bot-logo.png';


class App extends React.Component {

  render(){
    return (
      <div>
        <NavBar />
        <Column flexGrow={1}>
          <Row horizontal="center">
          </Row>
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
}

export default App;
