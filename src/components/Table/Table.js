import React from "react";
import tableStyle from "./table.scss";
const Table = (props) => {
  const columns = props.config[0].columns;
  const dataSource = props.config[0].dataSource;

  const rows = dataSource.map((item) => {
    return (
      <tr key={item.id}>
        <td className="td">{item.name}</td>
        <td className="td">{item.age}</td>
      </tr>
    );
  });
  const column = columns.map((item) => {
    return <th className="th">{item.title}</th>;
  });
  return (
    <div className="text">
      <table className="table">
        <thead>
          <tr>{column}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
