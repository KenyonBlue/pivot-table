import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Axios from "axios";
import data from "../../data/traffic_bytes.json";

import React, { useState, useEffect } from "react";

const Grid = () => {
  const [rowData, setRowData] = useState([]);
  // const [rowData, setRowData] = useState ([
  //     {Source: 'ford', Destination: 'focus', total_bytes: 40000 },
  //     {Source: 'caddy', Destination: 'xts', total_bytes: 50000 },
  //     {Source: 'lambo', Destination: 'aventy', total_bytes: 60000 },
  // ]);
const props = {
    sortable: true,
    filter: true
}

  const [columnDefs, setColumnDefs] = useState([
    { field: "Source", ...props},
    { field: "Destination", ...props },
    { field: "total_bytes", ...props },
  ]);

  const mapData = () => {
    let datalist = [];
    data.data.map((x) => {
      datalist.push({
        Source: x.result["All_Traffic.src"],
        Destination: x.result["All_Traffic.dest"],
        total_bytes: x.result.sum_bytes,
      });
    });
    return datalist;
  };

  const cellClickedListener = (e) => {
console.log('clicked' ,e)
  }

  useEffect(() => {
    setRowData(mapData());
  }, []);

  return (
    <>
      <div
        style={{
          height: "500px",
          width: "600px",
        }}
        //  className="ag-theme-alpine-dark">
        className="ag-theme-balham"
      >
        <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={rowData}
        animateRows={true}
        columnDefs={columnDefs} />
      </div>
    </>
  );
};

export default Grid;
