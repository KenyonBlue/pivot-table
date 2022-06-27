import React from "react";

const History = ({ history, bookmarded }) => {
  return (
    <>
     <div className="w-full md:w-1/5 text-right">
        
              <div className="w-full capitalize underline text-xl font-light md:text-center">
            history
          </div>
          {history?.length >= 1 &&
            history.map((x, index) => {
              return (
                <>
                  <div className="w-full">
                    <button
                      className="capitalize hover:text-RED hover:underline md:w-full"
                      onClick={() => bookmarded(x)}
                    >
                      <span className="text-xs"> {x.action}:</span>{" "}
                      <span className="text-sm text-GREY hover:text-RED tracking-wider">
                        {x.id}
                      </span>
                    </button>
                  </div>
                </>
              );
            })}
     </div>
            </>
  );
};

export default History;
