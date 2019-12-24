import React from 'react';
import axios from "axios";
import { Bar } from "@vx/shape";
import { Group } from "@vx/group";
import { scaleBand, scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { GradientTealBlue } from "@vx/gradient";

class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      width: 500,
      height: 500,
      margin: { top: 30, bottom: 40, left: 20, right: 20}
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
    const y = d => +d.count;

    const xScale = scaleBand({
      rangeRound: [0, xMax],
      domain: this.state.data.map(x),
      padding: 0.3,
    });
    const yScale = scaleLinear({
      rangeRound: [yMax, 0],
      domain: [0, Math.max(...this.state.data.map(y))],
    });


    const compose = (scale, accessor) => data => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    return (
      <div
        style={{
          height: 600,
          backgroundColor: "#f9f9f9",
          padding: 40,
          borderRadius: 5,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <svg
          width={this.state.width}
          height={this.state.height}
          style={{
            borderRadius: 5,
            backgroundColor: "white",
            padding: 15,
            boxShadow:
              "0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
          <AxisBottom
            top={yMax}
            scale={xScale}
            numTicks={this.state.width > 520 ? 10 : 5}
          />
          <AxisLeft
            top={this.state.margin.top}
            left={this.state.margin.left + 6}
            scale={yScale}
            numTicks={6}
            tickFormat={this.yScaleFormat}
          />
          {this.state.data.map((d, i) => {
            const barHeight = yMax - yPoint(d);
            return (
              <Group key={`bar-${i}`}>
                <GradientTealBlue id="TealBlue" />
                <Bar
                  x={xPoint(d)}
                  y={yMax - barHeight}
                  height={barHeight}
                  width={xScale.bandwidth()}
                  fill={`url(#TealBlue)`}
                />
              </Group>
            );
          })}
        </svg>
      </div>
    );
  }
}

export default BarGraph;