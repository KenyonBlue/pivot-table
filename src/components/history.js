import React from 'react'

const History = ({history, bookmarded}) => {
  return (
    <> 
    {history.length >= 1 && history?.map((item) => {
        return( <>
            <div onClick={bookmarded(item?.id, item?.action)} className="">
                <p>{item.id}</p>
            </div>
            </>
             )
    }) } 
    </>
  )
}

export default History