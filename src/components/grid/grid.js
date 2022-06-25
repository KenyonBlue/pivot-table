import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import React from 'react'

const Grid = () => {

    const rowData = [
        {make: 'ford', model: 'focus', price: 40000 },
        {make: 'caddy', model: 'xts', price: 50000 },
        {make: 'lambo', model: 'aventy', price: 60000 },
    ];
    const columnDefs = [{field: 'make'}, {field: 'model'}, {field: 'price'}];
  return (
    <>
    <div style={{
					height: '500px',
					width: '600px'
				}}
 className="ag-theme-balham">
    <AgGridReact rowData={rowData} columnDefs={columnDefs}/>
    </div>
    </>
  )
}

export default Grid