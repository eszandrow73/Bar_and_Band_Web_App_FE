
import React, {useState} from 'react'
import VideoPlayerYT from '../components/Basic_Video_Player'
import {Button} from 'antd'

export default function About() {
    const [vidURL, setVidURL] = useState('https://www.youtube.com/watch?v=PKwu15ldZ7k')
    const [show, setShow] = useState(true)
    
    const updateURL = () =>{
        setShow(false)
        setVidURL('https://www.youtube.com/watch?v=fgTGADljAeg')
        setShow(true)
    }
    
    return (
        <div>
            <h2>About</h2>
            {show?(<VideoPlayerYT url={vidURL}/>):('')}
            <Button onClick={updateURL}>update URL</Button>
        </div>
    );
}
