import React, {useState} from "react"
import { Form, Input, Button, Modal, message } from 'antd';
//import axios from 'axios'

const BandForm = (props) => {
    const [open, setOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const changeOpen = () => {
        if(open==false){
            setOpen(true)
        }
        else{
            setOpen(false)
        }
        console.log(open)
    };

    const onFinish = (values) =>{

        let r_list = []
        r_list.push(values.spotify)
        r_list.push(values.website)
        r_list.push(values.style)
        r_list.push(values.members)

        //console.log(r_list)
        /*
        axios.get('http://localhost:8999/addBand',{params: {'input':r_list}})
        .then((res)=>{
            console.log(res)
            messageApi.open({
                type: 'success',
                content: 'Band Data Added',
            });
            
        })
        .catch((err)=>{
            messageApi.open({
                type: 'error',
                content: err//'This is an error message',
              });
        })
        .finally(()=>{
            changeOpen()
        })
        */
       alert("Add Band")
        changeOpen()

    }

    return(
        <>
        <Button onClick={changeOpen}>Add Band Form</Button>
        <Modal visible={open} onOk={()=>console.log("OK pressed")} onCancel={changeOpen}>
        {contextHolder}
            <Form onFinish={onFinish}>
                <h1 style={{textPosition: 'center'}}>Fill out Band Details Below</h1>
                <Form.Item
                    label="spotify"
                    name="spotify"
                >
                    <Input placeholder="spotify link" />
                </Form.Item>
                <Form.Item
                    label="website"
                    name="website"
                >
                    <Input placeholder="website" />
                </Form.Item>
                <Form.Item
                    label="style"
                    name="style"
                >
                    <Input placeholder="style" />
                </Form.Item>
                <Form.Item
                    label="members"
                    name="members"
                >
                    <Input placeholder="members" />
                </Form.Item>
                <Button type="primary" htmlType="submit">Add Band</Button>
            </Form>
        </Modal>
        </>
    )
}

export default BandForm

