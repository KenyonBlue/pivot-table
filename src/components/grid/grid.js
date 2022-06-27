import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Axios from "axios";
import data from "../../data/traffic_bytes.json";
import History from "../history";

import React, { useState, useEffect, useMemo } from "react";

const Grid = ({ action, setAction, children }) => {
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
    filter: true,
  };

  const [columnDefs, setColumnDefs] = useState([
    { field: "Source", ...props },
    { field: "Destination", ...props },
    { field: "total_bytes", ...props },
  ]);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      filterParams: {
        buttons: ["apply", "clear"],
      },
    }),
    []
  );

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
  const originalList = mapData();

  const cellClickedListener = (e) => {
    console.log("clicked", e);
    setIpToFilter(e.value);
    setDisplayFilterOptions(!displayFilterOptions);
  };

  const reset = () => {
    let g = {
        list: originalList,
        action: null,
      };
      localStorage.setItem("fake-list", JSON.stringify(g));
    setRowData(originalList);
  };

  const clearHistory = () => {
    localStorage.setItem("history-list", []);
    setHistory([]);
  };

  useEffect(() => {
    const fetchedList = localStorage.getItem("fake-list");
    const fetchedHistoryList = localStorage.getItem("history-list");
    const paredList = JSON.parse(fetchedList);
    const paredHistoryList = fetchedHistoryList
      ? JSON.parse(fetchedHistoryList)
      : [];
    if (paredList?.list) {
      setHistory(paredHistoryList);
      setRowData(paredList.list);
      return;
    } else {
      console.log("creating list");
      let g = {
        list: originalList,
        action: null,
      };
      localStorage.setItem("fake-list", JSON.stringify(g));
      setHistory(paredHistoryList);
      setRowData(originalList);
    }
  }, []);

  const bookmarded = (x) => {
    console.log(x);
    if (x.action === "to") {
      setAction(`all traffic to :${x.id}`);
      let filteredDestinationList = originalList.filter(
        (data) => data.Destination === x.id
      );
      let g = {
        list: filteredDestinationList,
        action: "to",
      };
      localStorage.setItem("fake-list", JSON.stringify(g));
      setRowData(filteredDestinationList);
      return;
    } else {
      setAction(`all traffic from :${x.id}`);
      let filteredSourceList = originalList.filter(
        (data) => data.Source === x.id
      );
      let g = {
        list: filteredSourceList,
        action: "from",
      };
      localStorage.setItem("fake-list", JSON.stringify(g));
      setRowData(filteredSourceList);
      return;
    }
  };

  const trafficToAddress = (ip) => {
    console.log(ip);
    setAction(`all traffic to :${ip}`);
    let x = originalList.filter((data) => data.Destination === ip);
    let j = history || [];
    j.push({ id: ip, action: "to" });

    localStorage.setItem("history-list", JSON.stringify(j));
    setHistory(j);
    let g = {
      list: x,
      action: "to",
    };
    localStorage.setItem("fake-list", JSON.stringify(g));
    setRowData(x);
    setDisplayFilterOptions(!displayFilterOptions);
  };

  const trafficFromAddress = (ip) => {
    console.log(ip);
    setAction(`all traffic from :${ip}`);
    let x = originalList.filter((data) => data.Source === ip);
    let j = history;
    j.push({ id: ip, action: "from" });
    localStorage.setItem("history-list", JSON.stringify(j));
    setHistory(j);
    let g = {
      list: x,
      action: "from",
    };
    localStorage.setItem("fake-list", JSON.stringify(g));
    setRowData(x);
    setDisplayFilterOptions(!displayFilterOptions);
  };

  return (
    <>
      {displayFilterOptions && (
        <div className="flex flex-col items-center absolute z-100 top-40 shadow-lg w-80 py-4 min-h-20 bg-WHITE shadow-md rounded-md">
          <div className="mt-1"> {ipToFilter} </div>
          <div className="w-full flex justify-around px-2 mt-2">
            <button
              onClick={() => trafficToAddress(ipToFilter)}
              className="text-sm border rounded-md p-2 w-1/2 mr-1"
            >
              {" "}
              traffic to address
            </button>
            <button
              onClick={() => trafficFromAddress(ipToFilter)}
              className="text-sm border rounded-md p-2 w-1/2 ml-1"
            >
              {" "}
              traffic from address
            </button>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col shadow-lg py-4 items-center">
        <div className="flex w-full justify-between container-max px-4 flex-col md:flex-row items-center">
          <button
            className="capitalize border border-BLACK rounded-md m-1 p-1 w-full md:w-40 hover:bg-BLACK hover:text-WHITE"
            onClick={() => reset()}
          >
            reset IP addresses
          </button>
          {children}
          <button
            className="capitalize border border-BLACK rounded-md m-1 p-1 w-full md:w-40 hover:bg-BLACK hover:text-WHITE"
            onClick={() => clearHistory()}
          >
            clear history{" "}
          </button>
        </div>
      </div>
      <div className="w-full flex px-4 flex-col  md:flex-row-reverse justify-between container-max mt-4">
        <div className="w-full md:w-1/5 text-right">
          <div className="w-full capitalize underline text-xl font-light">
            history
          </div>
          {history?.length >= 1 &&
            history.map((x, index) => {
              return (
                <>
                  <div className="w-full">
                    <button
                      className="capitalize"
                      onClick={() => bookmarded(x)}
                    >
                      {x.action}:{" "}
                      <span className="text-sm text-GREY hover:text-RED">
                        {x.id}
                      </span>
                    </button>
                  </div>
                </>
              );
            })}
        </div>
        <div className="ag-theme-balham md:w-4/5  w-full h-720px">
          <AgGridReact
            onCellClicked={cellClickedListener}
            rowData={rowData}
            popupParent={document.body}
            animateRows={true}
            defaultColDef={defaultColDef}
            columnDefs={columnDefs}
          />
        </div>
      </div>
    </>
  );
};

export default Grid;
