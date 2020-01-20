import React from 'react';
import GraphContainer from './components/graphs/GraphContainer';
import NavBar from './components/NavBar';
import ResultsContainer from './components/results/ResultsContainer';
import { Column, Row } from "simple-flexbox";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdmin: false,
      error: "",
    };
  }

  async sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  handleError = async err => {
    this.setState({
      error: err
    });
    await this.sleep(3000);
    this.setState({
      error: ""
    });
  };

  handlePasswordConfirm = () => {
    this.setState({ isAdmin: true });
  };

  handlingLoadingToggle = () => {
    this.setState=({ loading: !this.state.loading})
  }

  render() {
    return (
      <div>
        <NavBar 
          onHandleError={this.handleError} 
          onPasswordConfirm={this.handlePasswordConfirm}
          isAdmin={this.state.isAdmin}/>
        <Column flexGrow={1} style={{ margin: 25, marginTop: 40 }}>
          <Row vertical="center" wrap="true">
            <Column flexGrow={1} horizontal="center">
              <ResultsContainer 
                isAdmin={this.state.isAdmin}
                onError={this.handleError} />
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
