import React from 'react';
import axios from "axios";
import { Bar } from "@vx/shape";
import { Group } from "@vx/group";
import { scaleBand, scaleLinear } from "@vx/scale";

class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  
  async componentDidMount() {
    const request = await Promise.all([
      axios.get("http://localhost:5000/jobs/bar-graph/"),
    ])
    console.log(request)
    this.setState({ data: request });

  };
//  x = Object.keys(this.state);
//  y = Object.values(this.state);  
//  xMax = 600;
//   this.yMax = 600 - 120;

//   this.xScale = scaleBand({
//     rangeRound: [0, this.xMax],
//     domain: this.x,
//     padding: 0.4
//   });

//   this.yScale = scaleLinear({
//     rangeRound: [this.yMax, 0],
//     domain: [0, Math.max(...this.y)]
//   });
  
  componentDidUpdate = () => {
    
  };
  
  // bounds

  render() {

    return (
      <svg width={this.width} height={this.height}>
        

        {/* <Group top={40}>
          {this.state.map((d, i) => {
            const letter = this.x(d);
            const barWidth = this.xScale.bandwidth();
            const barHeight = this.yMax - this.yScale(this.y(d));
            const barX = this.xScale(letter);
            const barY = this.yMax - barHeight;
            return (
              <Bar
                key={`bar-${letter}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgba(23, 233, 217, .5)"
                onClick={event => {
                  alert(`clicked: ${JSON.stringify(Object.values(d))}`);
                }}
              />
            );
          })}
        </Group> */}
      </svg>
    );
  }
}

export default BarGraph;