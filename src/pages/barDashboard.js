﻿import React, { useState, useEffect} from 'react'
import BasicTable from "../components/BBTable"
import axios from "axios"

export default function Dashboard(props) {

    const [bandData, setBandData] = useState([])
    const [colData, setColData] = useState([])

    const loadData = async() => {
        let res = await axios.get("http://localhost:8999/barData")
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
            <h2>Bar Dashboard</h2>
            <BasicTable in_cols={ colData } in_data={bandData } curUserId={props.curUserId} />
            <br /><br />
        </div>
    );
}