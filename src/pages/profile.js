import {useState, useEffect} from 'react'
import axios from 'axios'
import {Button, Card, Input, Form, Typography} from 'antd'
import { CheckOutlined, HighlightOutlined, SmileFilled, SmileOutlined } from '@ant-design/icons';
import ImageUploader from '../components/ImageUploader';
const { Title, Paragraph, Text, Link } = Typography

export default function Profile(props) {

    const [urlImg, setImg] = useState('')
    const [profileText, setProfileText] = useState('')

    const loadData = async() => {
        let res = await axios.get("http://localhost:8999/getProfile")
        console.log(res)
        setImg('http://localhost:8999/image/' + res.data[0].profileimage)
        setProfileText(res.data[0].profiletext)    
    }

    const onFinish=(update)=>{
        var values = {}
        values["profileEditText"] = update
        values["userId"] = 1
        console.log(values)
        axios.get("http://localhost:8999/updateProfile", {params: values})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            //toggleEdit()
            setProfileText(update)
        })
    }

    useEffect(() => {
        loadData()
    }, [profileText])
    
    return (
        <div>
            <h2>{props.curUser}'s Profile Page</h2>
            <br />
            <Card
            hoverable
            style={{
              width: '100%',
            }}
            cover={<img src={urlImg} />}
            >
            <br />
            <Paragraph
                editable={{
                    icon: <HighlightOutlined />,
                    tooltip: 'click to edit text',
                    onChange: onFinish,
                    enterIcon: <CheckOutlined />,
                }}
                style={{
                    height: '300px',
                }}
            >{profileText}</Paragraph>
            </Card>
            <ImageUploader in_page="Profile" />
        </div>
    );
}