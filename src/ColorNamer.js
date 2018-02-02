import React from "react";

import Input from "antd/lib/input";
import "antd/lib/input/style/css";

import ColorTable from "./ColorTable";
import getSimilarColors from "./colors.js";

export default class ColorNamer extends React.PureComponent {
  state = {
    code: "",
    names: [],
  };

  _onChange = event => {
    const { value } = event.target;

    const names = getSimilarColors(value);

    this.setState({
      code: value,
      names,
    });
  };

  _getDataInput = code => {
    if (!code) return;

    // "tag" the color that the user entered
    const codeStr = "user:" + code;

    const data = [
      {
        name: "Your color",
        hex: codeStr,
        distance: 0,
      },
    ];

    return data;
  };

  render() {
    const { code, names } = this.state;
    const dataIn = this._getDataInput(code);

    return (
      <div>
        <h2>Enter your color</h2>
        <Input
          style={{ width: "250px" }}
          onChange={this._onChange}
          value={code}
          placeholder="Enter your color, e.g. #1ce"
        />
        <br />
        <br />
        <ColorTable data={dataIn} />
        <br />
        <h2>Suggestions</h2>
        <ColorTable data={names} />
      </div>
    );
  }
}
