import React, { useState, useEffect, useMemo } from "react";
// AgGrid Api
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
// Imported Mock Data
import data from "../../data/traffic_bytes.json";
import History from "../history";
import OptionsModal from "../optionsModal";

const Grid = ({ setAction, children }) => {
  const [rowData, setRowData] = useState([]);
  const [ipToFilter, setIpToFilter] = useState("");
  const [history, setHistory] = useState([]);
  const [displayFilterOptions, setDisplayFilterOptions] = useState(false);
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
  const fieldProps = {
    sortable: true,
    filter: true,
  };
  const [columnDefs] = useState([
    { field: "Source", ...fieldProps },
    { field: "Destination", ...fieldProps },
    { field: "total_bytes", ...fieldProps },
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

  const cellClickedListener = (e) => {
    console.log("clicked", e);
    setIpToFilter(e.value);
    setDisplayFilterOptions(!displayFilterOptions);
  };

  const reset = () => {
    let resetList = {
      list: originalList,
      action: null,
    };
    localStorage.setItem("fake-list", JSON.stringify(resetList));
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
    setAction(`all traffic to :${ip}`);
    let destinationList = originalList.filter((data) => data.Destination === ip);
    let historyClone = history || [];
    historyClone.push({ id: ip, action: "to" });
    localStorage.setItem("history-list", JSON.stringify(historyClone));
    setHistory(historyClone);
    let historyStorage = {
      list: destinationList,
      action: "to",
    };
    localStorage.setItem("fake-list", JSON.stringify(historyStorage));
    setRowData(destinationList);
    setDisplayFilterOptions(!displayFilterOptions);
  };

  const trafficFromAddress = (ip) => {
    setAction(`all traffic from :${ip}`);
    let sourceList = originalList.filter((data) => data.Source === ip);
    let historyClone = history;
    historyClone.push({ id: ip, action: "from" });
    localStorage.setItem("history-list", JSON.stringify(historyClone));
    setHistory(historyClone);
    let historyStorage = {
      list: sourceList,
      action: "from",
    };
    localStorage.setItem("fake-list", JSON.stringify(historyStorage));
    setRowData(sourceList);
    setDisplayFilterOptions(!displayFilterOptions);
  };

  return (
    <>
      <OptionsModal
        displayFilterOptions={displayFilterOptions}
        setDisplayFilterOptions={setDisplayFilterOptions}
        ipToFilter={ipToFilter}
        trafficToAddress={trafficToAddress}
        trafficFromAddress={trafficFromAddress}
      />
      <div className="w-full flex flex-col shadow-lg py-4 items-center">
        <div className="flex w-full justify-between container-max px-4 flex-col md:flex-row items-center">
          <button
            className="capitalize border border-BLACK rounded-md m-1 p-1 w-full md:w-40 hover:bg-BLACK hover:text-WHITE"
            onClick={() => reset()}
          >
            Display all IP's
          </button>
          {children}
          <button
            className="capitalize border border-BLACK rounded-md m-1 p-1 w-full md:w-40 hover:bg-BLACK hover:text-WHITE"
            onClick={() => clearHistory()}
          >
            clear history
          </button>
        </div>
      </div>
      <div className="w-full flex px-4 flex-col  md:flex-row-reverse justify-between container-max mt-4">
        <History history={history} bookmarded={bookmarded} />
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
