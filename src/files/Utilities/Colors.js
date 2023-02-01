import React, { useState } from "react";
import Base from "../Base";
import "./Color.css";
import Card from "react-bootstrap/Card";

function Colors() {
  let data = [
    {
      title: "Custom Text Color Utilities",
      p1: ".text-gray-100",
      p2: ".text-gray-200",
      p3: ".text-gray-300",
      p4: ".text-gray-400",
      p5: ".text-gray-500",
      p6: ".text-gray-600",
      p7: ".text-gray-700",
      p8: ".text-gray-800",
      p9: ".text-gray-900",
      ps1: "clr",
      ps2: "clr",
      ps3: "clr",
      ps4: "clr",
      ps5: "clr1",
      ps6: "clr1",
      ps7: "clr1",
      ps8: "clr1",
      ps9: "clr1",
    },
    {
      title: "Custom Font Size Utilities",
      p1: ".text-xs",
      p2: ".text-lg",
      ps1: "font1",
      ps2: "clr2",
    },
    {
      title: "Custom Background Gradient Utilities",
      p1: ".bg-gradient-primary",
      p2: ".bg-gradient-secondary",
      p3: ".bg-gradient-success",
      p4: ".bg-gradient-info",
      p5: ".bg-gradient-warning",
      p6: ".bg-gradient-danger",
      p7: ".bg-gradient-light",
      p8: ".bg-gradient-dark",
      ps1: "clr3",
      ps2: "clr4",
      ps3: "clr5",
      ps4: "clr6",
      ps5: "clr7",
      ps6: "clr8",
      ps7: "clr9",
      ps8: "clr10",
    },
    {
      title: "Custom Grayscale Background Utilities",
      p1: ".bg-gray-100",
      p2: ".bg-gray-200",
      p3: ".bg-gray-300",
      p4: ".bg-gray-400",
      p5: ".bg-gray-500",
      p6: ".bg-gray-600",
      p7: ".bg-gray-700",
      p8: ".bg-gray-800",
      p9: ".bg-gray-900",
      ps1: "clr11",
      ps2: "clr12",
      ps3: "clr13",
      ps4: "clr14",
      ps5: "clr15",
      ps6: "clr16",
      ps7: "clr17",
      ps8: "clr18",
      ps9: "clr19",
    },
  ];
  return (
    <Base>
      <div className="startheading">
        Color Utilities
        <p className="para">
          Bootstrap's default utility classes can be found on the official
          Bootstrap Documentation page. The custom utilities below were created
          to extend this theme past the default utility classes built into
          Bootstrap's framework.
        </p>
      </div>
      {data.map((iteam) => (
        <ColorsCard
          title={iteam.title}
          p1={iteam.p1}
          p2={iteam.p2}
          p3={iteam.p3}
          p4={iteam.p4}
          p5={iteam.p5}
          p6={iteam.p6}
          p7={iteam.p7}
          p8={iteam.p8}
          p9={iteam.p9}
          ps1={iteam.ps1}
          ps2={iteam.ps2}
          ps3={iteam.ps3}
          ps4={iteam.ps4}
          ps5={iteam.ps5}
          ps6={iteam.ps6}
          ps7={iteam.ps7}
          ps8={iteam.ps8}
          ps9={iteam.ps9}
        />
      ))}
    </Base>
  );
}

export default Colors;

function ColorsCard(props) {
  return (
    <Card className="card5">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          <p className={props.ps1}>{props.p1}</p>
          <p className={props.ps2}>{props.p2}</p>
          <p className={props.ps3}>{props.p3}</p>
          <p className={props.ps4}>{props.p4}</p>
          <p className={props.ps5}>{props.p5}</p>
          <p className={props.ps6}>{props.p6}</p>
          <p className={props.ps7}>{props.p7}</p>
          <p className={props.ps8}>{props.p8}</p>
          <p className={props.ps9}>{props.p9}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
