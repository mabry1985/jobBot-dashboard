import React from 'react';
import BarGraph from './BarGraph';

class GraphContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      active: "Bar Graph"
    }
  }

  activeContent = () => {
    switch(this.state.active) {
      case "Bar Graph":
        return <BarGraph />;
      default:
        return <div></div>
    } 
  }
  
  render(){
    const content = this.activeContent()
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default GraphContainer