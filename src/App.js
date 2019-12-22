import React from 'react';
import GraphContainer from './components/graphs/GraphContainer';
import './App.css';
import ResultsContainer from './components/results/ResultsContainer';
import { Column, Row } from "simple-flexbox";


class App extends React.Component {
  
  render(){
    return (
      <div className='container'>
        <Column
          alignItems='center'
        >
          <div className='container'>
            <Row horizontal='space-between'>

              <Column alignSelf='center'>
                <ResultsContainer />
              </Column>
              
              <Column alignSelf='center'>
                <GraphContainer />
              </Column>
            
            </Row>
          </div>
        </Column>
      </div>
    );
  }
}

export default App;
