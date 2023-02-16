import React, {useState} from "react"
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import axios from 'axios'
import "./loginform.css"

const LoginForm = (props) => {
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
    const onFinish = async(values) =>{
        const un = values.username
        const pw = values.password

        var resId = await axios.get(`http://localhost:8999/getUser/${un}`)
        //console.log(resId)
        const id = resId.data[0].account_id

        var res = await axios.get(`http://localhost:8999/checkUser/${id}`)
        //console.log(res)
        let valid_pw = res.data[0].password

        if (pw==valid_pw){
            hideModal()
            props.storeUser(un, id, res.data[0].email)
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