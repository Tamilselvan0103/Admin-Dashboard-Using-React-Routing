import React from "react";
import Base from "../Base";
import "./Cards.css";
import Card from "react-bootstrap/Card";

function Cards() {
  let data = [
    {
      class1: "aside1",
      class2: "duration1",
      class3: "Price",
      title: "Earnings (MONTHLY)",
      price: "$ 40,000",
    },
    {
      class1: "aside2",
      class2: "duration2",
      class3: "Price",
      title: "Earnings (ANNUAL)",
      price: "$ 215,000",
    },
    {
      class1: "aside3",
      class2: "duration3",
      class3: "Price",
      title: "Task",
      price: "50%",
    },
    {
      class1: "aside4",
      class2: "duration4",
      class3: "Price",
      title: "Pending Request",
      price: "18",
    },
  ];
  let Carddetails = [
    {
      cart2title: "Default Card Example",
      cart2des:
        "This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.",
    },
    {
      cart2title: "Basic Card Example",
      cart2des:
        "The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!",
    },
    {
      cart2title: "Dropdown Card Example",
      cart2des:
        "Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.",
    },
    {
      cart2title: "Collapsable card Example",
      cart2des:
        "This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand",
    },
  ];
  return (
    <Base>
      <div className="startheading">Cards</div>
      <div className="cardsmain">
        {data.map((iteam) => (
          <Cards1
            class1={iteam.class1}
            class2={iteam.class2}
            class3={iteam.class3}
            title={iteam.title}
            price={iteam.price}
          />
        ))}
        <div className="card2">
          {Carddetails.map((iteam) => (
            <Cards2 cart2title={iteam.cart2title} cart2des={iteam.cart2des} />
          ))}
        </div>
      </div>
    </Base>
  );
}
export default Cards;

export function Cards1(props) {
  return (
    <div className="card1">
      <div className={props.class1}>
        <p className={props.class2}>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}


function Cards2(props) {
  return (
    <Card>
      <Card.Header>{props.cart2title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.cart2des}</Card.Text>
      </Card.Body>
    </Card>
  );
}
