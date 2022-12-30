import {useState} from 'react'
import axios from 'axios'
import {Button} from 'antd'

export default function PostPage() {

    const [urlList, setUrlList] = useState([])

    const getData = () =>{
        axios.get('http://localhost:8999/getPosts')
        .then((res)=>{
            //console.log(res.data)
            //var url_ = 'http://localhost:8999/image/' + res.data[0].imagename
            
            var output = []
            res.data.forEach((r)=>{
                output.push('http://localhost:8999/image/' + r.imagename)
            })
            setUrlList(output)
            
        })
    }
    

    return (
        <div>
            <h2>PostPage</h2>
            <Button onClick={getData}>Post Data</Button> <br />
            {urlList.map((u)=>(<>
                <img alt="no image" style={{'width':'500px','height':'500px' }} src={u} /><br />
            </>))}
        </div>
    );
}


/*
const url_ = res.data[1].postImage.data
//const url_2 = url_.toString('base64')z
console.log(url_)
let temp = new Blob( url_ , {'type': 'image/png'}); //
console.log(temp)
const url_2 = URL.createObjectURL(temp) 

let elem = document.createElement('a')
elem.target = url_2
elem.click()
console.log(elem)
*/

//image/jpeg
    //`data:;base64,${url}`

    //    <img  src='http://localhost:8999/image/test' />

