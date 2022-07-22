import React from "react";
import ReactApexChart from "react-apexcharts"


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series:[],
      options:{}
  };
  }
  
  componentDidMount() {
    var loadData = JSON.parse(JSON.stringify(this.props.stckline_data));
    var salesData = loadData[0]["sales"]
    var series = [{
      name: 'retailSales',
      data: salesData.map(item => item.retailSales)
    }, {
      name: 'retailerMargin',
      data: salesData.map(item => item.retailerMargin)
    }]
    var options= {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: salesData.map(item => item.weekEnding)
      },
      tooltip: {
        x: {
          format: 'dd/mm/yy '
        },
      }
    }

    this.setState({options:options,series:series})
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={450} />
    );
  }
}
export default Graph;