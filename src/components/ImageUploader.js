import React, {useState} from 'react'
//import axios from 'axios'
import {Button, Modal} from 'antd'

export default function ImageUploader(props){
    const [show, setShow] = useState(false)
    const [disForm, setDisForm] = useState(null)

    const changeShow = async() => {
        if(show==false){
            /*
            axios.get('http://localhost:8999/i_test/' + props.in_page)
            .then((res)=>{
                setDisForm(res.data)
                setShow(true)
          })
          .catch((err)=>console.log(err))
          */

          setDisForm(`
          <!DOCTYPE html>
          <html lang="eng">
      
          <body>
              <h1>Upload Image : ${props.in_page}</h1>
              <form method="POST" enctype="multipart/form-data">
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
          setShow(true)
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
    <Button onClick={changeShow}>Change Image</Button>
    <Modal visible={show} onOk={()=>console.log("OK pressed")} onCancel={changeShow}>
        <></>
        {disForm!=null?(<div dangerouslySetInnerHTML={{__html: disForm}} />):("")}
    </Modal>
    </>);
}

