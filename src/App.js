import React from 'react';
import GraphContainer from './components/graphs/GraphContainer';
import './App.css';


class App extends React.Component {
  data = [
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

  

  render(){
    return (
      <div className="App">
      <GraphContainer data={this.data}/>
      </div>
    );
  }
}

export default App;
