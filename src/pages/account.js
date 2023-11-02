import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import {Button} from 'antd'
import EmailUserForm from "../components/EmailForm"
import ImageUploader from "../components/ImageUploader"

export default function Account(props) {

    const email_users = async() =>{
        let u1 = 'Eric' 
        let u2 = 'Eric_old'
        let res1 = [
            {
              "username": "Eric",
              "password": "12345",
              "email": "ericzan73@aol.com"
            }
          ]
          //await axios.get(`http://localhost:8999/checkUser/${u1}`)
        let res2 = [
            {
              "username": "Eric2",
              "password": "12345",
              "email": "ericzan73@aol.com"
            }
          ]
          //await axios.get(`http://localhost:8999/checkUser/${u2}`)

        let email_list = []
        let from_email = res1.email
        console.log(from_email)
        email_list.push(from_email)

        let to_email = res2.email
        console.log(to_email)
        email_list.push(to_email)

        let subject = "Setting Subject of Email"
        email_list.push(subject)

        let e_text = "The text from this variable will be the text displayed in the email"
        email_list.push(e_text)

        alert("EMAIL SENT")

        /*
        axios.get('http://localhost:8999/sendEmail', {params:{input: email_list}})
        .then((res)=>{
            //
        })
        .catch((err)=>{
            //
        })
        */
    }

    return (
        <div>
            <h2>Account Details for {props.curUser}</h2>
            <br />
            <h2>Account Email : {props.curEmail}</h2>
            <EmailUserForm from="Eric" sentTo="Eric_old" />
            <ImageUploader in_page="Account Page"/>
        </div>
    );
}