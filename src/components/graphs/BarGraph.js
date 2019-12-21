import React from 'react';
import axios from "axios";
import { Bar } from "@vx/shape";
import { Group } from "@vx/group";
import { scaleBand, scaleLinear } from "@vx/scale";

class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      width: 500,
      height: 500,
      margin: { top: 20, bottom: 20, left: 20, right: 20}
    };
  }
  
  async componentDidMount() {
    const request = await axios.get("http://localhost:5000/skills/bar-graph/")
    this.setState({ data: request.data });
  };

  render() {
    const xMax = this.state.width - this.state.margin.left - this.state.margin.right;
    const yMax = this.state.height - this.state.margin.top - this.state.margin.bottom;

    const x = d => d.query;
    const y = d => +d.count * 100;

    const xScale = scaleBand({
      rangeRound: [0, xMax],
      domain: this.state.data.map(x),
      padding: 0.4,
    });
    const yScale = scaleLinear({
      rangeRound: [yMax, 0],
      domain: [0, Math.max(...this.state.data.map(y))],
    });

    const compose = (scale, accessor) => data => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    return (
      <svg width={this.state.width} height={this.state.height}>
        {this.state.data.map((d, i) => {
          const barHeight = yMax - yPoint(d);
          console.log(xScale.bandwidth())
          return (
            <Group key={`bar-${i}`}>
              <Bar
                x={xPoint(d)}
                y={yMax - barHeight}
                height={barHeight}
                width={xScale.bandwidth()}
                fill="#fc2e1c"
              />
            </Group>
          );
        })}
      </svg>
    );
  }
}

export default BarGraph;