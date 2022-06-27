import React from 'react'

const OptionsModal = ({displayFilterOptions, setDisplayFilterOptions,ipToFilter, trafficToAddress, trafficFromAddress }) => {
  return (
    <>
    {displayFilterOptions && (
        <div className="flex flex-col items-center absolute z-100 top-40 shadow-lg w-80 py-4 min-h-20 bg-WHITE shadow-md shadow-BLUE_AF rounded-md">
            <div className="w-full flex justify-end">
          <div onClick={() => setDisplayFilterOptions(!displayFilterOptions)} style={{marginTop: '-30px'}} className="border rounded-full bg-RED w-10 h-10 flex justify-center items-center mr-2 text-WHITE"> X</div>
            </div>
          <div className="mt-1"> {ipToFilter} </div>
          <div className="w-full flex justify-around px-2 mt-2">
            <button
              onClick={() => trafficToAddress(ipToFilter)}
              className="bg-LIGHT_GREY capitalize text-xs border-2 rounded-md p-2 w-1/2 mr-1 hover:bg-BLACK hover:text-WHITE"
            >
              {" "}
              traffic to address
            </button>
            <button
              onClick={() => trafficFromAddress(ipToFilter)}
              className="bg-LIGHT_GREY capitalize text-xs border-2 rounded-md p-2 w-1/2 ml-1 hover:bg-BLACK hover:text-WHITE"
            >
              {" "}
              traffic from address
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default OptionsModal