import React from "react";
import Base from "../Base";
import Card from "react-bootstrap/Card";

function ButtonCards() {
  let data = [
    {
      heading: "Circle Buttons",
      description:
        "Use Font Awesome icons (included with this theme package) along with the circle buttons as shown in the example below!",
      point1: ".btn-circle",
      classname1: "fa fa-facebook",
      classname2: "fa fa-twitter",
      classname3: "fa fa-google",
      classname4: "fa fa-linkedin",
      point2: ".btn-circle .btn-sm",
      point3: ".btn-circle .btn-lg",
    },
    {
      heading: "Brand Buttons",
      description:
        "Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.",
      des2: "You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file",
      class: "fa fa-home",
      class2: "btn btn2",
      innertext: "G.btn-google",
      innertext1: "f.btn-facebook",
    },
    {
      heading: "Split Buttons with Icon",
      description:
        "Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.",
      point4: "Also works with small and large button classes!",
      classname5: "btn3 success",
      classname6: "btn3 info",
      classname7: "btn3 warning",
      classname8: "btn3 danger",
      classname9: "btn3 default",
      classname10:"Success",
      classname11:"Info",
      classname12:"Warning",
      classname13:"Danger",
      classname14:"Default",
    },
  ];
  return (
    <Base>
      <p className="startheading">Button</p>
      {data.map((iteam) => (
        <Card className="card">
          <Card.Header className="header">{iteam.heading}</Card.Header>
          <Card.Body>
            <p>{iteam.description}</p>
            <p>{iteam.des2}</p>
            <a class={iteam.class2}>{iteam.innertext}</a>
            <a class={iteam.class2}>{iteam.innertext1}</a>
            <p className="btn1">{iteam.point1}</p>
            <div className="btnvariation">
              <a class={iteam.classname5}>{iteam.classname10}</a>
              <a class={iteam.classname6}>{iteam.classname11}</a>
              <a class={iteam.classname7}>{iteam.classname12}</a>
              <a class={iteam.classname8}>{iteam.classname13}</a>
              <a class={iteam.classname9}>{iteam.classname14}</a>
            </div>
            <div class="buttons">
              <a href="#" id="bt" class={iteam.classname1}></a>
              <a href="#" id="bt" class={iteam.classname2}></a>
              <a href="#" id="bt" class={iteam.classname3}></a>
              <a href="#" id="bt" class={iteam.classname4}></a>
            </div>
            <p className="btn1">{iteam.point2}</p>
            <div class="buttons">
              <a href="#" id="bt1" class={iteam.classname1}></a>
              <a href="#" id="bt1" class={iteam.classname2}></a>
              <a href="#" id="bt1" class={iteam.classname3}></a>
              <a href="#" id="bt1" class={iteam.classname4}></a>
            </div>
            <p className="btn1">{iteam.point3}</p>
            <p>{iteam.point4}</p>
            <div class="buttons">
              <a href="#" id="bt2" class={iteam.classname1}></a>
              <a href="#" id="bt2" class={iteam.classname2}></a>
              <a href="#" id="bt2" class={iteam.classname3}></a>
              <a href="#" id="bt2" class={iteam.classname4}></a>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Base>
  );
}

export default ButtonCards;
