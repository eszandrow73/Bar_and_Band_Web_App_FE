import React, {useState} from "react"
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import "./loginform.css"

const LoginForm = () => {
    const [displayForm, setDisplayForm] = useState("loginImg")
    const [rejMes, setRejMes] = useState("")
    const [ct, setCt] = useState(0)

    const hideModal = () => {
        setDisplayForm("hide");
    };

    //const handleOk = () => {
    //setIsModalVisible(false);
    //};
    //onOk={handleOk} onCancel={handleCancel}
    const onFinish = (values) =>{
        const un = values.username
        const pw = values.password

        if (un=="Eric" && pw=="1234"){
            hideModal()
        }
        else{
            var curCt = ct
            setCt(curCt + 1)
            setRejMes(`Incorrect UserName/Password. Login Attempt : ${curCt + 1}`)
        }
    }

    return(
        <div className={displayForm} >
            <div className={"loginContainer"}>
            <Form onFinish={onFinish}>
                <h2>Enter your B&B Account Information</h2>
                    {rejMes?(<>{rejMes}</>):("")}
                <Form.Item
                    label="username"
                    name="username"
                >
                    <Input placeholder="username" />
                </Form.Item>
                <Form.Item
                    label="password"
                    name="password"
                >
                    <Input placeholder="password" />
                </Form.Item>
                <Button type="primary" htmlType="submit">LogIn</Button>
            </Form>
            </div>
        </div>
    )
}
export default LoginForm