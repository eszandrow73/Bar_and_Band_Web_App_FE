
import React, {useState} from 'react'
import VideoPlayerYT from '../components/Basic_Video_Player'
import {Button, Modal,Form, Input} from 'antd'
import axios from 'axios'

export default function ChatPage() {
    const [vidURL, setVidURL] = useState('https://www.youtube.com/watch?v=PKwu15ldZ7k')
    const [show, setShow] = useState(true)
    const [cRes, setCRes] = useState("")
    const [image_url, setImage_URL] = useState("")
    
    const updateURL = () =>{
        setShow(false)
        setVidURL('https://www.youtube.com/watch?v=fgTGADljAeg')
        setShow(true)
    }
    const onFinish = async(values)=>{
        console.log(values)
        let qText = values.qText
        let res = await axios.get("http://localhost:8999/chat/"+qText)
        console.log(res)
        setCRes(res.data.choices[0].text)

    }

    const onFinishImage = async(values)=>{
        console.log(values)
        let imageText = values.imageText
        let res = await axios.get("http://localhost:8999/chat_image/"+imageText)
        console.log(res.data)
        setImage_URL(res.data.url)
        //let temp = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-8veRzBKA00SE7sobjoGFh4pA/user-47a38pri6CcSqwIyPag5By8Z/img-99uZ85YkrnJ3pyS0woihOQiQ.png?st=2023-03-04T23%3A39%3A42Z&se=2023-03-05T01%3A39%3A42Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-05T00%3A16%3A33Z&ske=2023-03-06T00%3A16%3A33Z&sks=b&skv=2021-08-06&sig=4XYwbDkUP4G4zEE6%2BDXjOW9NlTnC7Osj5lX2WUXayf4%3D"
        //setImage_URL(temp)

    }
    
    return (
        <div>Chat Page
            <Form onFinish={onFinish}>
                <Form.Item
                    label="Query Text"
                    name="qText"
                >
                    <Input />
                </Form.Item>
            
                <Button type="primary" htmlType="submit">Run Query</Button>
            </Form>
            <div>
                Response : 
                <br />
                <>{cRes}</>
            </div>

            <br /><br /> <br />

            <Form onFinish={onFinishImage}>
                <Form.Item
                    label="Text to Make Image"
                    name="imageText"
                >
                    <Input />
                </Form.Item>
            
                <Button type="primary" htmlType="submit">Gen Image</Button>
            </Form>
            <div>
                Generated Image : 
                <br />
                {image_url!=""?(<img src={image_url} />):("")}
            </div>
    
            {/*
            {show?(<VideoPlayerYT url={vidURL}/>):('')}
            <Button onClick={updateURL}>update URL</Button>
    */}
        </div>
    );
}