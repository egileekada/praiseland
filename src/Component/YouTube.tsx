import React from 'react';
import YouTube from 'react-youtube';
import '../styles.css';
const BASE_EMBED_URL = 'I6DSRI98GpU';
 
class Youtube extends React.Component {
    _onReady(event: { target: { pauseVideo: () => void; }; }) {
        event.target.pauseVideo();
      }
  render() {
    const opts = {
      height: '450',
      width: '100%',
    }
    
    return (
        <div style={{height: '100%', width: '100%'}}>
            <YouTube 
                videoId={BASE_EMBED_URL} 
                opts={opts}
                onReady={this._onReady} />
        </div>
        
    ) 
  }
 

}

export default Youtube;