import React, {useState} from "react"
import { Form, Input, Button, Modal, message } from 'antd';
import axios from 'axios'
const { TextArea } = Input;

const EmailForm = (props) => {
    const [open, setOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [from, setFrom] = useState("")
    const [sentTo, setSendTo] = useState("")

    const changeOpen = async() => {
        if(open==false){
            let res1 = await axios.get(`http://localhost:8999/checkUser/${props.from}`)
            let res2 = await axios.get(`http://localhost:8999/checkUser/${props.from}`)//sentTo}`)

            let from_email = res1.data[0].email
            setFrom(from_email)

            let to_email = res2.data[0].email
            setSendTo(to_email)
            setOpen(true)
        }
        else{
            setFrom("")
            setSendTo("")
            setOpen(false)
        }
        console.log(open)
    };

    //const handleOk = () => {
    //setIsModalVisible(false);
    //};
    //onOk={handleOk} onCancel={handleCancel}
    const onFinish = (values) =>{

        let email_list = []
        email_list.push(from)
        email_list.push(sentTo)
        email_list.push(values.subject)
        email_list.push(values.email_text)

        //console.log(r_list)
        axios.get('http://localhost:8999/sendEmailReal', {params:{input: email_list}})
        //axios.get('http://localhost:8999/sendEmail', {params:{input: email_list}})
        .then((res)=>{
            console.log(res)
            messageApi.open({
                type: 'success',
                content: 'Email Sent',
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
        

    }

    return(
        <>
        <Button onClick={changeOpen}>Prepare Email</Button>
        <Modal visible={open} onOk={()=>console.log("OK pressed")} onCancel={changeOpen}>
        {contextHolder}
            <Form onFinish={onFinish}>
                <h1 style={{textPosition: 'center'}}>Fill out Email Details Below</h1>
                <Form.Item
                    label="subject"
                    name="subject"
                >
                    <Input placeholder="add subject here" />
                </Form.Item>
                <Form.Item
                    label="email_text"
                    name="email_text"
                >
                    <TextArea placeholder="add email text here" style={{height:'300px'}} />
                </Form.Item>
                <Button type="primary" htmlType="submit">Send Email</Button>
            </Form>
        </Modal>
        </>
    )
}

export default EmailForm

