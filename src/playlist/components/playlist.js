import React, {Component} from 'react'
import Media from './media'

class Playlist extends Component {
    render() {
        const playlist = this.props.data.categories[0].playlist
        console.log(this.props.data)
        return(
            <div>
                {
                    playlist.map((item)=>{
                      return <Media {...item} key={item.id}/>
                    })
                }

            </div>
        )
    }

}

export default Playlist
