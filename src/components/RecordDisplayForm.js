import React, {useState} from "react"
import {Form, Input, Button, Modal} from 'antd'
import EmailForm from './EmailForm'

const RecordDisplayForm = (props) => {

    return (
        <> 
        <Modal 
            visible={props.isOpen}
            onOk={props.close}  
            onCancel={props.close}
        >
            <Form
                disabled={true}
            >
                <br /><br />
            {
                props.keys.map((k)=>(
                    (!k.includes("id") && !k.includes("Id"))?(
                    <>
                        <Form.Item
                            label={k}
                            name={k}
                        >
                            <Input defaultValue={props.data[k]} />
                        </Form.Item>
                    </>
                    ):("")
                ))
            }
            </Form>
            <EmailForm from={props.curUserId} sentTo={props.user_id} />
        </Modal>
        </>
    )
}

export default RecordDisplayForm
