import React, {useState, useEffect} from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default function DeckTable(props){
    const columnDefs = props.in_cols
    if (columnDefs[0]!=undefined){
        columnDefs[0].checkboxSelection = true
    }

    const rowData =  props.in_data ;

    /*
    const rowData= [
                {make: 'Toyota', model: 'Celica', price: 35000},
                {make: 'Ford', model: 'Mondeo', price: 27000},
                {make: 'Porsche', model: 'Boxter', price: 64000}
            ]

    autoGroupColumnDef: {
            headerName: 'ID',
            field: 'id',
            cellRenderer: 'agGroupCellRenderer',
            cellRendererParams:{
                    checkbox: true
                }
            }
    */
        
    const [gridApi, setGridApi] = useState(null)
    
    
    const onButtonClick = () => {
        const selectionNodes = gridApi.getSelectedNodes();
        const selectedData = selectionNodes.map(node => node.data);
        console.log(selectedData)

        var firstObj = selectedData[0]
        let keys = Object.keys(firstObj)
        let output = ""

        keys.forEach((k)=>{
            output = output + firstObj[k].toString() + ","
        })

        alert(output)
    }
    
    const [initalLoad, setInitialLoad] = useState(false)
    
    useEffect(() => {
        if (initalLoad == false) { 
            if (gridApi != null) {
                
                gridApi.sizeColumnsToFit();
                //console.log(gridApi.columnModel.columnDefs)
                setInitialLoad(true)
            }
        }
    },[gridApi])
    
    
    return (
        <div 
            className="ag-theme-balham" 
            style={{
                width:800,
                height:800
            }}
        >
            {props.in_data[0]!=undefined?(
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    onGridReady={params => setGridApi(params.api)}
                />):("")
            }
            <button onClick={onButtonClick}>View Selected Card</button>
            
        </div>
    )
    
}

