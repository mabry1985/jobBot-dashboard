import React from 'react';
import * as d3 from 'd3';

class BarGraph extends React.Component {

  componentDidMount() {
    this.drawGraph(this.props.data);
  }

  componentDidUpdate() {
    this.drawGraph(this.props.data);
  }

  drawGraph = (data) => {
    const margin = { top: 20, right: 20, bottom: 100, left: 100 };
    const graphWidth = 600 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;

    const svg = d3.select('.canvas')
      .append('svg')
      .attr('width', 600)
      .attr('height', 600);

    const graph = svg.append('g')
      .attr('width', graphWidth)
      .attr('height', graphHeight)
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const xAxisGroup = graph.append('g')
      .attr('transform', `translate(0, ${graphHeight})`)

    xAxisGroup.selectAll('text')
      .attr('transform', 'rotate(-40)')
      .attr('text-anchor', 'end')
      .attr('font-size', '14px')

    const yAxisGroup = graph.append('g');

    const y = d3.scaleLinear()
      .range([graphHeight, 0]);
    const x = d3.scaleBand()
      .range([0, graphWidth])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
      .ticks(3)
      .tickFormat(d => d);

    const t = d3.transition().duration(750)

    y.domain([0, d3.max(data, d => d.mentions)]);
    x.domain(data.map(item => item.name));

    const rects = graph.selectAll('rect')
      .data(data);

    //remove unwanted shapes
    rects.exit().remove();

    // //update current shapes in DOM
    // rects.attr('width', x.bandwidth)
    //   .attr('fill', 'orange')
    //   .attr('x', d => x(d.name))

    rects.enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', 0)
      .attr('fill', 'blue')
      .attr('x', d => x(d.name))
      .attr('y', graphHeight)
      .merge(rects)
      .transition(t)
      .attr("height", d => graphHeight - y(d.mentions))
      .attr('y', d => y(d.mentions));

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);
  };

  render(){
    return <div className='canvas'></div>
  }
}

export default BarGraph;