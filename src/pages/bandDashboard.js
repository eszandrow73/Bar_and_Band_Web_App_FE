import React, { useState, useEffect} from 'react'
import BasicTable from "../components/BBTable"
import AddBand from "../components/AddBandForm"
import axios from "axios"
import {Button} from 'antd'
import CT from "../components/CellTest"

export default function Dashboard(props) {

    const [bandData, setBandData] = useState([])
    const [colData, setColData] = useState([])

    const loadData = async() => {
        let res = await axios.get("http://localhost:8999/bandData")
        console.log(res)
        setBandData(res.data)
        let keys = Object.keys(res.data[0])
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
        setColData(colDef)
            
    }

    const memberInfo = async()=>{
        let res = await axios.get("http://localhost:8999/band/1/member/1")
        console.log(res.data)
        let output = res.data[0]
        alert(output.memberName)
    }

    const ax_call = async()=>{
        //https://resttesttest.com/
        //this works
        //var res = await Axios.get('https://httpbin.org/get')
        //let's try this
        //var res = await Axios.post('https://httpbin.org/post')
        //id, spotify, website, "style", members
        let r_list = []
        r_list.push(3)
        r_list.push('https://open.spotify.com/artist/2RbojkeHFCCbnmM4UAaWiN')
        r_list.push('https://andreagillis.bandcamp.com/')
        r_list.push('Alernative')
        r_list.push('Andrea Gillis')
        //console.log(r_list)
        var res = await axios.get('http://localhost:8999/addBand',{params: {'input':r_list}})
          console.log(res)
    }

    useEffect(() => {
        loadData()
    }, [])
    //loadData()


    return (
        <div>
            <h2>Band Dashboard</h2>
            <AddBand />
            <br /><br />
            <BasicTable in_cols={ colData } in_data={bandData } curUserId={props.curUserId} />
            <br />
            <Button onClick={ax_call}>test</Button><br />
            <Button onClick={memberInfo}>member info</Button>
        </div>
    );
}