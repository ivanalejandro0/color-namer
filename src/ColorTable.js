import React from "react";

// This syntax can be used when babel-plugin-import is used
// import { Table } from "antd";
// import "antd/dist/antd.css";

import Table from "antd/lib/table";
import "antd/lib/table/style/css";

const colorBlockStyle = {
  width: "100px",
  height: "20px",
};

/**
 * "Tag" color with "user:" prefix to distinguish the
 * input format that the user used vs the "always hex"
 * that 'color-namer' uses.
 */
const parseColor = color => {
  let result;

  if (color.startsWith("user:")) {
    result = color.substr(5);
  } else {
    // TODO: consider rgba colors
    result = "#" + color;
  }

  return result;
};

const HexColor = hex => (
  <div
    style={{
      ...colorBlockStyle,
      backgroundColor: parseColor(hex),
    }}
  />
);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "HEX",
    dataIndex: "hex",
    render: hex => parseColor(hex),
  },
  {
    title: "Color",
    dataIndex: "hex",
    key: "color",
    render: HexColor,
  },
  {
    title: "Distance",
    dataIndex: "distance",
    render: d => (d ? d.toFixed(3) : "Exact match"),
  },
];

export default class ColorTable extends React.PureComponent {
  render() {
    const { data } = this.props;

    return (
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={false}
      />
    );
  }
}
