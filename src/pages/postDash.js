import {useState, useEffect} from 'react'
import axios from 'axios'
import BasicTable from "../components/BBTable"
import AddPost from "../components/AddPostForm"
import {Button} from 'antd'
import CT from "../components/CellTest"

export default function PostPage(props) {

    const [urlList, setUrlList] = useState([])
    const [postData, setPostData] = useState([])
    const [colData, setColData] = useState([])

    const loadData = async() => {
        let res = [
            {
              "postText": "first post",
              "location": "Boston",
              "postId": 6,
              "user_id": 1,
              "img_id": null
            },
            {
              "postText": "second post",
              "location": "Boston",
              "postId": 7,
              "user_id": 1,
              "img_id": null
            },
            {
              "postText": "image post",
              "location": "Boston",
              "postId": 8,
              "user_id": 1,
              "img_id": "1673588631255-baleful-mastery.png"
            }
          ]
        //await axios.get("http://localhost:8999/getPosts")
        console.log(res)
        setPostData(res)
        let keys = Object.keys(res[0])
        var colDef = []
        /*
        keys.forEach((k) => {
            colDef.push({headerName:k, field:k})
        })
        */
        let first = true
        keys.forEach((k) => {
            if (first==true){
                colDef.push({headerName:k, field:k, cellRenderer: CT})
            }
            else{
                colDef.push({headerName:k, field:k})
            }
            first = false
        })
        setColData(colDef)
            
    }

    const getData = () =>{
        /*
        axios.get('http://localhost:8999/getImages')
        .then((res)=>{
            //console.log(res.data)
            //var url_ = 'http://localhost:8999/image/' + res.data[0].imagename
            
            var output = []
            res.data.forEach((r)=>{
                output.push('http://localhost:8999/image/' + r.imagename)
            })
            setUrlList(output)
            
        })
        */
        setUrlList("/person.png")
    }

    useEffect(() => {
        loadData()
    }, [])
    

    return (
        <div>
            <h2>PostPage</h2>
            <AddPost in_page='MainPost' />{/*<Button onClick={getData}>View Images</Button>*/}
            <br /><br />
            <BasicTable in_cols={ colData } in_data={postData } curUserId={props.curUserId}/>
            <br /><br />
            {/*urlList.map((u)=>(<>
                <img alt="no image" style={{'width':'500px','height':'500px' }} src={u} /><br />
            </>))*/}
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

