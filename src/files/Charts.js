import React from "react";
import Base from "./Base";
import { LineChart, PieChart, ColumnChart } from "react-chartkick";
import "chartkick/chart.js";
import { Card } from "react-bootstrap";

function Charts() {
  return (
    <Base>
      <div className="startheading">
        Charts
        <p className="para">
          Chart.js is a third party plugin that is used to generate the charts
          in this theme. The charts below have been customized - for further
          customization options, please visit the official Chart.js
          documentation.
        </p>
      </div>
      <AreaChart />
      <Piechart />
      <Columnchart />
    </Base>
  );
}

export default Charts;

function AreaChart() {
  return (
    <Card className="">
      <Card.Header>Area Chart</Card.Header>
      <Card.Body>
        <Card.Text>
          <LineChart data={{ "2021-05-13": 2, "2021-05-14": 5 }} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Piechart() {
  return (
    <Card className="">
      <Card.Header>Piechart</Card.Header>
      <Card.Body>
        <Card.Text>
          <PieChart
            data={[
              ["Blueberry", 44],
              ["Strawberry", 23],
              ["Banana", 13],
              ["Apple", 10],
              ["Grap", 10],
            ]}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Columnchart() {
  return (
    <Card className="">
      <Card.Header>Column chart</Card.Header>
      <Card.Body>
        <Card.Text>
          <ColumnChart
            data={[
              ["Sun", 32],
              ["Mon", 46],
              ["Tue", 28],
              ["Wed", 10],
              ["Thu", 15],
              ["Fri", 20],
              ["Sat", 25],
            ]}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
