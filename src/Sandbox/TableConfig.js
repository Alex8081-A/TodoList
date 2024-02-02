import React from "react";
import Table from "../components/Table/Table";
function TableConfig() {
  return (
    <div>
      <Table
        config={[
          {
            columns: [
              {
                dataKey: "name", //Ключ по которому брать значение
                title: "Имя", //Заголовок столбца
              },
              {
                dataKey: "age",
                title: "Возраст",
              },
            ],
            dataSource: [
              {
                name: "Petr",
                age: "15",
              },
              {
                name: "Ivan",
                age: "18",
              },
              {
                name: "Test",
                age: "25",
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default TableConfig;
