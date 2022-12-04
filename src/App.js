import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import {useState, useEffect} from 'react';
import BarBandForm from './BarBandForm.js'
import {Button, Modal, Input} from 'antd'
import "antd/dist/antd.css";
import LoginForm from "./components/loginform"

var cors = require('cors')


function App() {

  const [value, onChange] = useState(new Date());
  const [toggleView, setToggleView] = useState(false)

  const data = [
    {
        overview:"Jul 15 9:00 pm| FireFly's BBQ | Gary Backstrom Band",
        id:1,
        bar: "Bar : FireFly's BBQ",
        bar_data: {
          location: "350 E. Main Street,Marlborough, MA 01752",
          website : "https://www.fireflysbbq.com/",
          mainMenu : "https://www.fireflysbbq.com/dine-in-menu",
          beverageMenu : "https://www.fireflysbbq.com/beverage-menu"
        },
        band:"Band : Gary Backstrom Band",
        band_data:{
          music : "https://open.spotify.com/artist/2RbojkeHFCCbnmM4UAaWiN",
          website : "https://www.garybackstrom.com/",
          style : "Classic Rock/ Jam",
          members : "Gary Backstrom, Chris Nemitz, Everett Pendleton, Peter Koeplin, Yahuba Torres, Kit Holliday, and Kevin Silvia, and John Vanderpool"
        }
    },
    {
      overview:"Jul 10 10:00 pm | Bar Name | Band Name #2",
        id:4,
        bar: "Bar 2",
        bar_data: {
          location: "temp loc",
          website : "https://www.google.com/",
          mainMenu : "https://www.google.com/",
          beverageMenu : "https://www.google/"
        },
        band:"Band 2",
        band_data:{
          music : "https://www.google.com/",
          website : "https://www.google.com/",
          style : "some style",
          members : "add people"
        }
    },
    {
      overview:"Jul 30 9:30 pm| Bar Name | Band Name #3",
        id:7,
        bar: "Bar 3",
        bar_data: {
          location: "temp loc",
          website : "https://www.google.com/",
          mainMenu : "https://www.google.com/",
          beverageMenu : "https://www.google/"
        },
        band:"Band 3",
        band_data:{
          music : "https://www.google.com/",
          website : "https://www.google.com/",
          style : "some style",
          members : "add people"
        }
    },
  ]

  const [rawData, setRawData] = useState(data)
  const [selTime, setSelTime] = useState("Sat Jul 16 2022")

  const dayFormatter = (locale, date)=>{
    var inDate = date.toDateString()
    var day = inDate.split(" ")[1] +" " + inDate.split(" ")[2]
    var add_text = ""
    console.log(inDate)
    console.log(day)

    //if(parseInt(inDate.split(" ")[2])>15  ){
    //  add_text = " Over 15"
    //}

    

    data.forEach((r)=>{
      let rday = parseInt(r.overview.split(" ")[1])
      let rmonth = r.overview.split(" ")[0]
      //console.log(temp)
      
      if(rday == parseInt(inDate.split(" ")[2]) && rmonth == inDate.split(" ")[1]){
        //console.log(temp)
        //console.log(inDate.split(" ")[2])
        day = ""
        add_text = add_text + r.overview + " _"
      }
    })
    

    return  day + add_text
  }

  const calFunTest = (e) => {
    //alert(e)
    console.log(e)

    let timeList = e.toString().split(' ')
    console.log(timeList)
    var inTime = ""
    for(let x=0; x<4; x++){
      inTime = inTime + timeList[x] + " "
    }
    console.log(inTime)
    setSelTime(inTime)
    setRawData(data)
    
    if(toggleView == true){
      setToggleView(false)
      console.log("HIDE")
    }
    else{
      setToggleView(true)
      console.log("SHOW")
    }
    
  }
  //var newRaw = []

  function getSelectedDayData() {
    var newRaw = []
    //console.log(rawData)
    rawData.forEach((r)=>{
      let temp = r.overview.split('|')
      r.overview = selTime + "|" + temp[1] + "|" + temp[2]
      console.log(r)
      newRaw.push(r)
    })
    console.log(newRaw)
    return newRaw
  }

  const basic_test = () =>{
    if(toggleView == true){
      setToggleView(false)
      console.log("HIDE")
    }
    else{
      setToggleView(true)
      console.log("SHOW")
    }
  }

  const handleCancel = () => {
    setToggleView(false);
  };

  const applyCalFilter = () =>{
    let a = document.getElementsByClassName("BarName")[0].value
    let b = document.getElementsByClassName("MusicStyle")[0].value
    alert(a + " | " + b)
  }

  const getBarData = () =>{
     Axios.get('http://localhost:8999/barData').then((res)=>{
       console.log(res)
       console.log(res.data)
     })
  }

  const getBandData = () =>{
    Axios.get('http://localhost:8999/bandData').then((res)=>{
      console.log(res)
      console.log(res.data)
    })
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
  var res = await Axios.get('http://localhost:8999/addBand',{params: {'input':r_list}})
    console.log(res)
}


  return (
    <div className="App">
      <header className="App-header" style={{"text":"black"}}>
        <div style={{"z-index":100}}>
        <LoginForm />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Bar <Input className="BarName" style={{"width":"300px", "height":"60px"}} />   Music Style <Input className="MusicStyle" style={{"width":"300px", "height":"60px"}} />
          <br /><Button onClick={applyCalFilter} style={{"font-size":"40px", "height":"60px"}}>Search</Button>
        </div><br />
        <Calendar onChange={onChange} value={value} onClickDay={calFunTest} formatDay={dayFormatter}/>
        <BarBandForm isModalVisible={toggleView} inCancel={handleCancel} inData={getSelectedDayData()}/>
        <Button onClick={getBarData}>Bar Data</Button>
        <Button onClick={getBandData}>Band Data</Button>
        <Button onClick={ax_call}>test</Button>
        
      </header>
    </div>
  );
}

export default App;
