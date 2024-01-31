import React from "react";
import tableStyle from "./table.scss";
const Table = () => {
  const columns = [
    {
      dataKey: "name",
      title: "Имя",
    },
    {
      dataKey: "age",
      title: "Возраст",
    },
  ];

  const dataSource = [
    {
      id: 1,
      name: "Petr",
      age: "15",
    },
    {
      id: 2,
      name: "Ivan",
      age: "18",
    },
    {
      id: 3,
      name: "Test",
      age: "25",
    },
    {
      id: 4,
      name: "Pisya",
      age: "3",
    },
  ];

  const rows = dataSource.map((item) => {
    return (
      <tr key={item.id}>
        <td className="td">{item.name}</td>
        <td className="td">{item.age}</td>
      </tr>
    );
  });

  const column = columns.map((item) => {
    return (
      <th className="th" key={item.dataKey}>
        {item.title}
      </th>
    );
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
