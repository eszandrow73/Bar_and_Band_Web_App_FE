import React, { useState, useEffect} from 'react'
import BasicTable from "../components/BBTable"
//import axios from "axios"
import CT from "../components/CellTest"

export default function Dashboard(props) {

    const [bandData, setBandData] = useState([])
    const [colData, setColData] = useState([])

    const loadData = async() => {
        let res = [
            {
              "artwork": "Sans titre",
              "artist_name": "Antonio OLIVEIRA RODIN",
              "sponsor": null,
              "user_id": 5,
              "band_id": 1,
              "id": 3
            }
          ]
          //await axios.get("http://localhost:8999/artData")
        console.log(res)
        setBandData(res)
        let keys = Object.keys(res[0])
        var colDef = []
        
        var first = true
        keys.forEach((k) => {
            if (first==true){
                colDef.push({headerName:k, field:k, cellRenderer: CT})
            }
            else{
                colDef.push({headerName:k, field:k})
            }
            first = false
        })

        /*
        keys.forEach((k) => {
            colDef.push({headerName:k, field:k})
        })
        */
        setColData(colDef)
            
    }

    useEffect(() => {
        loadData()
    }, [])
    //loadData()


    return (
        <div>
            <h2>Art Dashboard</h2>
            <BasicTable in_cols={ colData } in_data={bandData } curUserId={props.curUserId} />
            <br /><br />
        </div>
    );
}