import React from 'react';
import axios from "axios";
import Loading from '../Loading';
import { Bar } from "@vx/shape";
import { Group } from "@vx/group";
import { scaleBand, scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { GradientTealBlue } from "@vx/gradient";
import styled from "styled-components";

const BarGraphDiv = styled.div`
  height: 650px;
  background-color: #f9f9f9;
  padding: 62px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledSvg = styled.svg`
  border-radius: 5px;
  background-color: white;
  padding: 15px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19);
`;

class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      width: 525,
      height: 525,
      margin: 
        { 
          top: 30, 
          bottom: 25, 
          left: 20, 
          right: 20
        },
      loading: true,
    };
  }
  
  async componentDidMount() {
    const request = await axios.get("https://jobbot-server.herokuapp.com/skills/bar-graph/")
    this.setState({ data: request.data, loading: false });
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

    if (this.state.loading) {
     return (
     <div>
        <Loading />
      </div>
     )
    }

    return (
      <BarGraphDiv>
        <StyledSvg width={this.state.width} height={this.state.height}>
          <AxisBottom
            top={yMax}
            scale={xScale}
            numTicks={this.state.width > 520 ? 10 : 5}/>
          <AxisLeft
            top={this.state.margin.top}
            left={this.state.margin.left + 6}
            scale={yScale}
            numTicks={6}
            tickFormat={this.yScaleFormat}/>
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
                  fill={`url(#TealBlue)`}/>
              </Group>
            );
          })}
        </StyledSvg>
      </BarGraphDiv>
    );
  }
}

export default BarGraph;