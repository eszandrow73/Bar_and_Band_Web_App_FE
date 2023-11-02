import React, { useState, useEffect} from 'react'
import BasicTable from "../components/BBTable"
import CT from "../components/CellTest"
//import axios from "axios"

export default function Dashboard(props) {

    const [bandData, setBandData] = useState([])
    const [colData, setColData] = useState([])

    const loadData = async() => {
        let res = [
            {
              "id": 1,
              "name": "Bar : FireFlys BBQ",
              "location": "350 E. Main Street,Marlborough, MA 01752",
              "website": "https://www.fireflysbbq.com/",
              "food_menu": "https://www.fireflysbbq.com/dine-in-menu",
              "drink_menu": "https://www.fireflysbbq.com/beverage-menu",
              "bandPlayedAt": 1
            }
          ]
          //await axios.get("http://localhost:8999/barData")
        console.log(res)
        setBandData(res)
        let keys = Object.keys(res[0])
        var colDef = []
        /*
        keys.forEach((k) => {
            colDef.push({headerName:k, field:k})
        })
        */
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