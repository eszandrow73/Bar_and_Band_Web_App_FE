import React, {useState} from 'react'
import axios from 'axios'
import {Button, Modal} from 'antd'

export default function ImageUploader(props){
    const [show, setShow] = useState(false)
    const [disForm, setDisForm] = useState(null)

    const changeShow = async() => {
        if(show==false){
            axios.get('http://localhost:8999/i_test/' + props.in_page)
            .then((res)=>{
                setDisForm(res.data)
                setShow(true)
          })
          .catch((err)=>console.log(err))
        }
        else{
            setShow(false)
        }
    };

    function loadImage(event){
        console.log(event)
        console.log(event.target.files[0]);
        var selectedImage = event.target.files[0];
        var elem = document.createElement('img')
        elem.src = URL.createObjectURL(selectedImage)
        document.getElementById('body').appendChild(elem);
    }

    return(<><br /><br />
    <Button onClick={changeShow}>Upload Image</Button>
    <Modal visible={show} onOk={()=>console.log("OK pressed")} onCancel={changeShow}>
        <></>
        {disForm!=null?(<div dangerouslySetInnerHTML={{__html: disForm}} />):("")}
    </Modal>
    </>);
}