import React, {useState} from "react"
import { Form, Input, Button, Modal, message } from 'antd';
//import axios from 'axios'

const { TextArea } = Input;

const PostForm = (props) => {
    const [open, setOpen] = useState(false);
    const [disForm, setDisForm] = useState(null)
    const [messageApi, contextHolder] = message.useMessage();

    const changeOpen = async() => {
        if(open==false){
            /*
            axios.get('http://localhost:8999/i_test/' + props.in_page)
            .then((res)=>{
                setDisForm(res.data)
                setOpen(true)
          })
          */
          setDisForm(`
          <!DOCTYPE html>
          <html lang="eng">
      
          <body>
              <h1>Upload Image : ${props.in_page}</h1>
              <form method="POST"  enctype="multipart/form-data">
                  <input type="file" name="image" onChange="function loadImage(event){
                      console.log(event)
                      console.log(event.target.files[0]);
                      var selectedImage = event.target.files[0];
                      var elem = document.createElement('img');
                      elem.src = window.URL.createObjectURL(selectedImage);
                      document.getElementById('body').appendChild(elem);
                  }
                  loadImage(event);">
                  <div id='body'></div>
                  <input type="submit">
              </form>
          </body>
          </html>
          `)
          setOpen(true)
        }
        else{
            setOpen(false)
        }
        console.log(open)
    };

    const onFinish = (values) =>{

        let r_list = []
        
        //THIS NEEDS TO BE UPDATED TO THE USER's ID
        r_list.push(1)

        r_list.push(values.postText)
        r_list.push(values.location)

        //console.log(r_list)
        /*
        axios.get('http://localhost:8999/addPost',{params: {'input':r_list}})
        .then((res)=>{
            console.log(res)
            messageApi.open({
                type: 'success',
                content: 'Post Data Added',
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
        
        messageApi.open({
            type: 'success',
            content: 'Post Data Added',
        });
        changeOpen()

    }

    return(
        <>
        <Button onClick={changeOpen}>Add Post</Button>
        <Modal visible={open} onOk={()=>console.log("OK pressed")} onCancel={changeOpen}>
        {contextHolder}
            <Form onFinish={onFinish}>
                <h1 style={{textPosition: 'center'}}>Fill out Band Details Below</h1>
                <Form.Item
                    label="postText"
                    name="postText"
                >
                    <TextArea placeholder="add post text here" style={{height:'300px'}} />
                </Form.Item>
                <Form.Item
                    label="location"
                    name="location"
                >
                    <Input placeholder="location" />
                </Form.Item>
                {disForm!=null?(<div dangerouslySetInnerHTML={{__html: disForm}} />):("")}
                <Button type="primary" htmlType="submit">Add Post</Button>
            </Form>
        </Modal>
        </>
    )
}

export default PostForm

