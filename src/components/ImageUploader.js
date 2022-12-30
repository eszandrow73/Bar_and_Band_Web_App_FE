import React, {useState} from 'react'
import axios from 'axios'
import {Button, Modal} from 'antd'

export default function ImageUploader(){
    const [show, setShow] = useState(false)
    const [disForm, setDisForm] = useState(null)

    const changeShow = async() => {
        if(show==false){
            axios.get('http://localhost:8999/i_test')
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

    return(<><br /><br />
    <Button onClick={changeShow}>Upload Image</Button>
    <Modal visible={show} onOk={()=>console.log("OK pressed")} onCancel={changeShow}>
        <></>
        {disForm!=null?(<div dangerouslySetInnerHTML={{__html: disForm}} />):("")}
    </Modal>
    </>);
}