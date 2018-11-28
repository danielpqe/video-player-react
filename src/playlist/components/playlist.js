import React from 'react'
import Media from './media'
import './playlist.css'

function Playlist(props){
        return(
            <div className="Playlist">
                {
                    props.playlist.map((item)=>{
                      return <Media
                          {...item}
                          key={item.id}
                          handleClick={props.handleClick}
                      />
                    })
                }

            </div>
        )
}

export default Playlist
