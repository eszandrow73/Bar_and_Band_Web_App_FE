//import Buttons from './Vid_Buttons.js'
import React from 'react'
import ReactPlayer from 'react-player'

class Video extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        'in_url':this.props.url,
        'playingVideo': false
    };
    this.playPause = this.playPause.bind(this);

  }

  /*
  playVideo() {
    // You can use the play method as normal on your video ref
    // debugger;
    this.setState({'playingVideo':true})
    //this.refs.vidRef.getInternalPlayer().playVideo()
  }

  pauseVideo() {
    // Pause as well
    this.refs.vidRef.getInternalPlayer().pauseVideo()
  }
  */

  playPause() {
    if(this.state.playingVideo==true){
        this.setState({'playingVideo':false})
    }
    else if(this.state.playingVideo==false){
        this.setState({'playingVideo':true})
    }
  }



  // You can pass your function references to your child components as props (here passing down to the Buttons component)
  render(){

    return(
      <div>
        <ReactPlayer url={this.state.in_url}
            width="100%"
            pip={true}
            ref="vidRef"
            controls={true}
            playing={this.state.playingVideo}
          ></ReactPlayer>
        <button onClick={this.playPause}>Play / Pause</button>
      </div>
    );
  }
}

export default Video