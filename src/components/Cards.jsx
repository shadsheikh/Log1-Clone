import React from "react";
import items from "./Api/CardsApi";
const Cards = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        {" "}
        <div className="row d-flex justify-content-center">
          {items.map((item) => {
            return (
              <div className= {item.css} col-md-2 >
                <div className="icons">
                  <i className={item.icon} ></i>
                  <div className="content">
                    <div className="color">{item.value}</div>
                    <div className="card-desc">{item.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
