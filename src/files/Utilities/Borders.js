import React from "react";
import Base from "../Base";
import "./Border.css";

function Border() {
  let data = [
    {
      title: ".border-left-primary",
      class: "box1",
    },
    {
      title: ".border-left-secondary",
      class: "box2",
    },
    {
      title: ".border-left-success",
      class: "box3",
    },
    {
      title: ".border-left-info",
      class: "box4",
    },
    {
      title: ".border-left-warning",
      class: "box5",
    },
    {
      title: ".border-left-danger",
      class: "box6",
    },
    {
      title: ".border-left-dark",
      class: "box7",
    },
  ];
  let data1 = [
    {
      title: ".border-left-primary",
      class: "box8",
    },
    {
      title: ".border-left-secondary",
      class: "box9",
    },
    {
      title: ".border-left-success",
      class: "box10",
    },
    {
      title: ".border-left-info",
      class: "box11",
    },
    {
      title: ".border-left-warning",
      class: "box12",
    },
    {
      title: ".border-left-danger",
      class: "box13",
    },
    {
      title: ".border-left-dark",
      class: "box14",
    },
  ];
  return (
    <Base>
      <div className="startheading">
        Border Utilities
        <p className="para">
          Bootstrap's default utility classes can be found on the official
          Bootstrap Documentation page. The custom utilities below were created
          to extend this theme past the default utility classes built into
          Bootstrap's framework.
        </p>
      </div>
      <div className="Card1">
        {data.map((iteam) => (
          <Border1 title={iteam.title} class={iteam.class} />
        ))}
      </div>
      <div className="Card2">
        {data1.map((iteam) => (
          <Border2 title={iteam.title} class={iteam.class} />
        ))}
      </div>
    </Base>
  );
}

export default Border;

function Border1(props) {
  return (
    <div className={props.class}>
      <p className="title">{props.title}</p>
    </div>
  );
}

function Border2(props) {
  return (
    <div className={props.class}>
      <p className="title">{props.title}</p>
    </div>
  );
}

function Border3(props) {
  return (
    <div className={props.class}>
      <p className="title">{props.title}</p>
    </div>
  );
}
