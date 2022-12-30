import React, { useState, useEffect} from 'react'
import BasicTable from "../components/BBTable"
import axios from "axios"

export default function Dashboard() {

    const [bandData, setBandData] = useState([])
    const [colData, setColData] = useState([])
    /*
        [
            
            {headerName: 'Header', field: 'headerText', sortable: true, filter: true, checkboxSelection: true, width: 200},
            
            { headerName: "ID", field: 'id' },
            { headerName: 'Members', field: 'members' },
            { headerName: 'Spotify', field: 'spotify' },
            { headerName: 'Style', field: 'style' },
            { headerName: 'Website', field: 'website' }

        ]
    )
    */

    const loadData = async() => {
        let res = await axios.get("http://localhost:8999/bandData")
        console.log(res)
        setBandData(res.data)
        let keys = Object.keys(res.data[0])
        var colDef = []
        keys.forEach((k) => {
            colDef.push({headerName:k, field:k})
        })
        setColData(colDef)
            
    }

    useEffect(() => {
        loadData()
    }, [])
    //loadData()


    return (
        <div>
            <h2>Dashboard</h2>
            <BasicTable in_col={ colData } in_data={bandData }/>
        </div>
    );
}