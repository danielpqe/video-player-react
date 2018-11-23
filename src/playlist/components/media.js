import React,{Component} from 'react';
import './media.css';
import PropTypes from 'prop-types'
class Media extends Component{
    state = {
        author: 'Daniel PQE'
    }
    // constructor(props){
    //     super(props)
    //     this.state= {
    //         author: props.author
    //     }
    //    super(props)
    //     this.handleClick=this.handleClick.bind(this);
    // }
    handleClick=(event)=>{
        // console.log(this.props.image)
        this.setState({
            author: 'Ricardo Celis',
        })
    }
    render() {
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.props.image} alt="" width={260} height={160}/>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        );
    }
}
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}
export default Media;
