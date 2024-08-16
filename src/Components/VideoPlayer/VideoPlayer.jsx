import React, { useRef } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <iframe className='video'                      
            src="https://www.youtube.com/embed/_KiAGbenrGQ?autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>      
    </div>
  )
}
import './VideoPlayer.css'

export default VideoPlayer
