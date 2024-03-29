﻿
import Calendar from 'react-calendar';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Button, Modal, Input } from 'antd'
import BarBandForm from '../BarBandForm.js'

export default function CalendarComponent(){
    const [value, onChange] = useState(new Date());
    const [toggleView, setToggleView] = useState(false)

    const data = [
        {
            overview: "Jul 15 9:00 pm| FireFly's BBQ | Gary Backstrom Band",
            id: 1,
            bar: "Bar : FireFly's BBQ",
            bar_data: {
                location: "350 E. Main Street,Marlborough, MA 01752",
                website: "https://www.fireflysbbq.com/",
                mainMenu: "https://www.fireflysbbq.com/dine-in-menu",
                beverageMenu: "https://www.fireflysbbq.com/beverage-menu"
            },
            band: "Band : Gary Backstrom Band",
            band_data: {
                music: "https://open.spotify.com/artist/2RbojkeHFCCbnmM4UAaWiN",
                website: "https://www.garybackstrom.com/",
                style: "Classic Rock/ Jam",
                members: "Gary Backstrom, Chris Nemitz, Everett Pendleton, Peter Koeplin, Yahuba Torres, Kit Holliday, and Kevin Silvia, and John Vanderpool"
            }
        },
        {
            overview: "Jul 10 10:00 pm | Bar Name | Band Name #2",
            id: 4,
            bar: "Bar 2",
            bar_data: {
                location: "temp loc",
                website: "https://www.google.com/",
                mainMenu: "https://www.google.com/",
                beverageMenu: "https://www.google/"
            },
            band: "Band 2",
            band_data: {
                music: "https://www.google.com/",
                website: "https://www.google.com/",
                style: "some style",
                members: "add people"
            }
        },
        {
            overview: "Jul 30 9:30 pm| Bar Name | Band Name #3",
            id: 7,
            bar: "Bar 3",
            bar_data: {
                location: "temp loc",
                website: "https://www.google.com/",
                mainMenu: "https://www.google.com/",
                beverageMenu: "https://www.google/"
            },
            band: "Band 3",
            band_data: {
                music: "https://www.google.com/",
                website: "https://www.google.com/",
                style: "some style",
                members: "add people"
            }
        },
    ]

    const [rawData, setRawData] = useState(data)
    const [selTime, setSelTime] = useState("Sat Jul 16 2022")

    const dayFormatter = (locale, date) => {
        var inDate = date.toDateString()
        var day = inDate.split(" ")[1] + " " + inDate.split(" ")[2]
        var add_text = ""

        //if(parseInt(inDate.split(" ")[2])>15  ){
        //  add_text = " Over 15"
        //}



        data.forEach((r) => {
            let rday = parseInt(r.overview.split(" ")[1])
            let rmonth = r.overview.split(" ")[0]
            //console.log(temp)

            if (rday == parseInt(inDate.split(" ")[2]) && rmonth == inDate.split(" ")[1]) {
                //console.log(temp)
                //console.log(inDate.split(" ")[2])
                day = ""
                add_text = add_text + r.overview + " _"
            }
        })


        return day + add_text
    }

    const calFunTest = (e) => {
        //alert(e)
        //console.log(e)

        let timeList = e.toString().split(' ')
        var inTime = ""
        for (let x = 0; x < 4; x++) {
            inTime = inTime + timeList[x] + " "
        }

        setSelTime(inTime)
        setRawData(data)

        if (toggleView == true) {
            setToggleView(false)
            //console.log("HIDE")
        }
        else {
            setToggleView(true)
            //console.log("SHOW")
        }

    }
    //var newRaw = []

    function getSelectedDayData() {
        var newRaw = []
        //console.log(rawData)
        rawData.forEach((r) => {
            let temp = r.overview.split('|')
            r.overview = selTime + "|" + temp[1] + "|" + temp[2]
            newRaw.push(r)
        })

        return newRaw
    }

    const basic_test = () => {
        if (toggleView == true) {
            setToggleView(false)
            //console.log("HIDE")
        }
        else {
            setToggleView(true)
            //console.log("SHOW")
        }
    }

    const handleCancel = () => {
        setToggleView(false);
    };

    const applyCalFilter = () => {
        let a = document.getElementsByClassName("BarName")[0].value
        let b = document.getElementsByClassName("MusicStyle")[0].value
        alert(a + " | " + b)
    }

    const getBarData = () => {
        Axios.get('http://localhost:8999/barData').then((res) => {
            console.log(res)
            console.log(res.data)
        })
    }

    const getBandData = () => {
        Axios.get('http://localhost:8999/bandData').then((res) => {
            console.log(res)
            console.log(res.data)
        })
    }

    return (
        <div>
            <div>
                Bar <br /><Input className="BarName" style={{ "width": "50%", "height": "10%" }} /><br />   Music Style <br /><Input className="MusicStyle" style={{ "width": "50%", "height": "10%" }} />
                <br /><Button onClick={applyCalFilter} style={{ "fontSize": "15px", "height": "10%" }}>Search</Button>
            </div><br />
            <Calendar onChange={onChange} value={value} onClickDay={calFunTest} formatDay={dayFormatter} />
            <BarBandForm isModalVisible={toggleView} inCancel={handleCancel} inData={getSelectedDayData()} />

            <Button onClick={getBarData}>Bar Data</Button>
            <Button onClick={getBandData}>Band Data</Button>
        </div>
    );
}
