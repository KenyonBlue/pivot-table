import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Axios from "axios";
import data from "../../data/traffic_bytes.json";
import History from '../history'

import React, { useState, useEffect, useMemo } from "react";

const Grid = ({action, setAction}) => {
  const [rowData, setRowData] = useState([]);
  const [ipToFilter, setIpToFilter] = useState("");
  const [history, setHistory] = useState([]);
  const [displayFilterOptions, setDisplayFilterOptions] = useState(false);
  
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

  const defaultColDef = useMemo(() => ({
    flex: 1,
    filterParams: {
        buttons: ['apply', 'clear']
    }
  }),[])

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
  const originalList = mapData()

  const cellClickedListener = (e) => {
console.log('clicked' ,e)
setIpToFilter(e.value)
setDisplayFilterOptions(!displayFilterOptions)
  }

  const reset = () => {
    setRowData(originalList);
  }

  useEffect(() => {
    setRowData(originalList);
  }, []);

const bookmarded = (x) => {
    console.log(x)
    if (x.action === 'to') {
        console.log('in here')
        setAction(`all traffic to :${x.id}`)
        let l = originalList.filter((data) => data.Destination === x.id);
        setRowData(l)
    }
}

  const trafficToAddress = (ip) => {
    console.log(ip)
    setAction(`all traffic to :${ip}`)
    let x = rowData.filter((data) => data.Destination === ip);
    let j = history
    j.push({id: ip, action: 'to'})
    setHistory(j)
    setRowData(x)
    setDisplayFilterOptions(!displayFilterOptions)
    // setRowData((data) => data.filter((data) => data.Destination === ip))
  }

  const trafficFromAddress = (ip) => {
    console.log(ip)
    setAction(`all traffic from :${ip}`)
    setDisplayFilterOptions(!displayFilterOptions)
    let x = rowData.filter((data) => data.Destination === ip);
    setRowData(x)
  }

  return (
    <>
       {displayFilterOptions && <div className="flex flex-col items-center absolute z-100 top-40 test w-80 py-4 min-h-20 bg-WHITE shadow-md rounded-md">
           
            <div className="mt-1">  {ipToFilter} </div>
            <div className="w-full flex justify-around px-2 mt-2">
                <button onClick={() => trafficToAddress(ipToFilter)} className="text-sm border rounded-md p-2 w-1/2 mr-1"> traffic to address</button>
                <button onClick={() => trafficFromAddress(ipToFilter)} className="text-sm border rounded-md p-2 w-1/2 ml-1"> traffic from address</button>
            </div>
        </div>}
      <div
        style={{
          height: "500px",
          width: "600px",
        }}
        //  className="ag-theme-alpine-dark">
        className="ag-theme-balham"
      >
     <div className="w-ful flex flex-col h-20 test">
        <button onClick={() => reset()}>rest ip addresses </button>
        <div className="w-full">
            { history.length >= 1 &&  history.map((x,index) => {
                return (
                    <>
                    <button onClick={() => bookmarded(x)}>{index}: {x.id} </button>
                    </>
                )
            })}
        </div>
     </div>
        <AgGridReact
        onCellClicked={cellClickedListener}
        rowData={rowData}
        popupParent={document.body}
        animateRows={true}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs} />
      </div>
    </>
  );
};

export default Grid;
