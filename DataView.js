import React, { useState } from "react";

export default class DataView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.entries };
  }

  countProps(obj) {
    var count = 0;
    for (var p in obj) {
      obj.hasOwnProperty(p) && count++;
    }
    return count;
  }

  makeUl(array) {
    let list = document.createElement("ul");

    for (let i = 0; i < this.countProps(array); i++) {
      let item = document.createElement("li");
      item.appendChild(document.createTextNode(array[i]));
      list.appendChild(item);
    }
    return list;
  }

  render() {
    const { data } = this.state;
    let uList = Object.values(this.makeUl(data));
    return <div className="list">{uList}</div>;
  }
}
