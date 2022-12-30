import React, { useState } from "react";
import {Button} from 'antd'
import axios from 'axios'


const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [disForm, setDisForm] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="not found" width={"1000px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <Button onClick={()=>setSelectedImage(null)}>Remove</Button>
        <Button onClick={()=>{
          let raw_input = selectedImage
          console.log(selectedImage)
          //raw_input["name"] = 'image'
          axios({
            url:'http://localhost:8999/api/image-upload',
            method:"POST",
            data: raw_input
          })
          .then((res)=>{
            console.log(res)
          })
          .catch((err)=>console.log(err))
        }}>Add to DB</Button>
        </div>
      )}
      {selectedImage==null?(
      <>
      <br />
      <br /> 
      <input
        type="file"
        name="image"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          //axios.post('http://localhost:8999/api/image-upload', {data:event.target.files[0]})
          
        }}
      />
      <Button onClick={()=>{
          let raw_input = selectedImage
          console.log(selectedImage)
          //raw_input["name"] = 'image'
          axios.get('http://localhost:8999/i_test')
          .then((res)=>{
            console.log(res)
            setDisForm(res.data)
          })
          .catch((err)=>console.log(err))
        }}>check output</Button>
      
      </>):("")}
      <div>
        {disForm!=null?(
        <div dangerouslySetInnerHTML={{__html: disForm}} />):("")}
      </div>
    </div>
    
  );
};

export default UploadAndDisplayImage;