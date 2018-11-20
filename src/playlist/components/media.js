import React,{Component} from 'react';

class Media extends React.Component{
    render() {
        const styles = {
            container:{
                fontSize: 14,
                backgroundColor: 'white'
            }
        }
        return (
            <div style={styles.container}>
                <div>
                    <img src="" alt="" width={260} height={160}/>
                    <h3>React</h3>
                    <p>by @danielpqe</p>
                </div>
            </div>
        );
    }
}

export default Media;