import React, { useContext } from "react";

const Table = ({ datas }) => {
  console.log(datas);
  return (
    <div className="tdiv">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th> Rank</th>
            <th>College Preference1</th>
            <th>College Preference2</th>
            <th>College Preference3</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.rank}</td>
                <td>{item.c1}</td>
                <td>{item.c2}</td>
                <td>{item.c3}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
