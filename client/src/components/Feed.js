import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MemeItem from './MemeItem';
class Feed extends Component {
    constructor(){
        super()
        this.state={
            memes:[]
        }
    }
    async componentDidMount(){
        try{
            const res =  await axios.get('/memes');
            this.setState({
                memes:res.data
            })
            //console.log(this.state.memes);

        }catch(err){
            this.setState({
                errors: err.response.data,
                check:true
            })   
        }
    }
    render() { 
        const { memes }=this.state;
        return ( 
            <div className="container">
               <h1 className="large text-primary">Memes Feed!</h1>
                <div className="posts">
                    
                    {memes.map((meme) => (
                    <MemeItem key={meme._id} meme={meme} id={meme._id} />
                    ))}
                   
                </div>
            </div>
         );
    }
}
 
export default Feed;