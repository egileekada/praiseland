import React from 'react';
import YouTube from 'react-youtube';
import '../styles.css';
const BASE_EMBED_URL = 'I6DSRI98GpU';
 
class Youtube extends React.Component {
    _onReady(event: { target: { pauseVideo: () => void; }; }) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  render() {
    const opts = {
      height: '450',
      width: '100%',
    //   playerVars: {
    //     // https://developers.google.com/youtube/player_parameters
    //     autoplay: 1,
    //   }, 
    }

    // const videoId = 'I6DSRI98GpU'
    
    return (
        <div className='video'>
            <YouTube 
                videoId={BASE_EMBED_URL} 
                opts={opts}
                onReady={this._onReady} />
        </div>
        
    ) 
  }
 

}

export default Youtube;