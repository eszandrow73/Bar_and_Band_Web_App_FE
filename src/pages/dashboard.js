import React, { useState, useEffect} from 'react'
import BasicTable from "../components/BBTable"
//import axios from "axios"

export default function Dashboard(props) {

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
        let res = [
            {
              "id": 1,
              "spotify": "https://open.spotify.com/artist/2RbojkeHFCCbnmM4UAaWiN",
              "website": "https://www.garybackstrom.com/",
              "style": "Classic Rock/ Jam",
              "members": "Gary Backstrom, Chris Nemitz, Everett Pendleton, Peter Koeplin, Yahuba Torres, Kit Holliday, and Kevin Silvia, and John Vanderpool"
            },
            {
              "id": 2,
              "spotify": "https://open.spotify.com/artist/2RbojkeHFCCbnmM4UAaWiN",
              "website": "https://andreagillis.bandcamp.com/",
              "style": "Alernative",
              "members": "Andrea Gillis"
            }
          ]
          //await axios.get("http://localhost:8999/bandData")
        console.log(res)
        setBandData(res)
        let keys = Object.keys(res[0])
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
            <BasicTable in_col={ colData } in_data={bandData } curUserId={props.curUserId} />
        </div>
    );
}