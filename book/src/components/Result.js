import React, { useContext, useState } from "react";

const Result = ({ datas }) => {

    const [bombay,setBombay]=useState(2)
    const [kanpur,setKanpur]=useState(1)



  console.log(datas);
  return (
    <div className="tdiv">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th> Rank</th>
            <th>Alloted College</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.rank}</td>
                <td>
                  {item.c1 ? item.c1 : item.c2 ? item.c2 : item.c3 ?item.c3 :"Not Alloted"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;