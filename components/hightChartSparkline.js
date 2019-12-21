import React from 'react'
import Highcharts from 'highcharts'

import  { Component } from "react";

const defaultOptions = {
  chart: {
    backgroundColor: null,
    borderWidth: 0,
    type: 'area',
    margin: [0, 0, 0, 0],
    // width: 220,
    // height: 20,
    style: {
      // overflow: 'visible'
    },

    // small optimalization, saves 1-2 ms each sparkline
    skipClone: true
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  xAxis: {
    labels: {
      enabled: false
    },
    title: {
      text: null
    },
    startOnTick: false,
    endOnTick: false,
    tickPositions: []
  },
  yAxis: {
    endOnTick: false,
    startOnTick: false,
    labels: {
      enabled: false
    },
    title: {
      text: null
    },
    tickPositions: [0]
  },
  legend: {
    enabled: false
  },
  tooltip: {
    backgroundColor: 'white',
    borderWidth: 1,
    hideDelay: 0,
    shared: true,
    padding: 8,
    borderColor: 'silver',
    borderRadius: 3,
    positioner: function (w, h, point) {
      return { x: point.plotX - w / 2, y: point.plotY - h };
    }
  },
  plotOptions: {
    series: {
      animation: false,
      lineWidth: 1,
      shadow: false,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      marker: {
        radius: 1,
        states: {
          hover: {
            radius: 2
          }
        }
      },
      fillOpacity: 0.25
    },
    column: {
      negativeColor: '#910000',
      borderColor: 'silver'
    }
  },

  series: [{
    data: [1,2,3]
  }]
};
class SparkLine extends Component {
  componentDidMount() {
    var title = {
      text: "Monthly Average Temperature"
    };
    var subtitle = {
      text: "Source: WorldClimate.com"
    };
    var xAxis = {
      categories: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
      ]
    };
    var yAxis = {
      title: {
        text: "Temperature (\xB0C)"
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: "#808080"
        }
      ]
    };
    var tooltip = {
      // valueSuffix: ""
    };
    var legend = {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      borderWidth: 0
    };
    var series = [
      {
        name: "Orders",
        data: [
          7.0,
          6.9,
          9.5,
          14.5,
          18.2,
          21.5,
          25.2,
        ]
      },
      
      
    ];
    const json = {};
    json.title = title;
    json.legend = legend;
    json.subTitle = subtitle;
    json.series = series;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    this.setState({ json });
    // const rootElement = document.getElementById("container");
    // Highcharts.chart("container", this.state.json);
    // $("#container").chart(this.state.json);
    const options = Highcharts.merge(defaultOptions, json)
    Highcharts.chart(this.container, options);
  }

  componentWillUnmount () {
    this.chart.destroy()
  }

  render () {
    return (
        <td 
          ref={container => this.container = container}
        >
        </td>
    )
  }
}

export default SparkLine;
