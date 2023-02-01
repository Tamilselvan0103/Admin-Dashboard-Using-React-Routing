import React from "react";
import Base from "../Base";
import Card from "react-bootstrap/Card";
import "./others.css";

function Others(props) {
  let data = [
    {
      head: "Overflow Hidden Utilty",
      otherclass: "none",
      des1: "Use .o-hidden to set the overflow property of any element to hidden",
    },
    {
      head: "Progress Small Utility",
      des1: "Normal Progress Bar",

      des2: "Small Progress Bar",
      des3: "Use the .progress-sm class along with .progress",
    },
    {
      head: "Dropdown - No Arrow",
      bnttext: "Dropdown (no arrow)",
      otherclass: "none",
      des1: "Dropdown",
      class: "bnttext",
    },
  ];

  return (
    <Base>
      <div className="startheading">
        Other Utilities
        <p className="para">
          Bootstrap's default utility classes can be found on the official
          Bootstrap Documentation page. The custom utilities below were created
          to extend this theme past the default utility classes built into
          Bootstrap's framework.
        </p>
      </div>
      <div className="othercard">
        {data.map((iteam) => (
          <OthersCard
            head={iteam.head}
            des1={iteam.des1}
            des2={iteam.des2}
            des3={iteam.des3}
            class={iteam.class}
            bnttext={iteam.bnttext}
            otherclass={iteam.otherclass}
          />
        ))}
      </div>
    </Base>
  );
}

export default Others;

function OthersCard(props) {
  return (
    <Card className="card5">
      <Card.Header>
        <p className="title">{props.head}</p>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <div>
            <p className={props.class}>{props.bnttext}</p>
            <p>{props.des1}</p>
            <input
              type="range"
              value="50%"
              max="100%"
              disabled
              className={props.otherclass}
            />
            <p>{props.des2}</p>
            <input
              type="range"
              value="50%"
              max="100%"
              disabled
              className={props.otherclass}
            />
            <p>{props.des2}</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
