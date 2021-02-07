import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class EditProfile extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            url:'',
            caption:'',
           check:false
        }
    }
    async componentDidMount(){
        try{
            const res =  await axios.get(`/memes/${this.props.match.params.id}`);
            this.setState({
                name:res.data.name,
                url:res.data.url,
                caption:res.data.caption,
                check:true
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
        const { check,name,url,caption }=this.state;
        
        return ( 
            <div className="text-center">
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                    <h1 className="text-success">Posted by: {name}</h1>
                    <h1 className="text-primary">Caption: {caption}</h1>
                       <img style={{height:"200px", width:"200px"}} src={url} alt="" className="rounded-circle"/>
                       
                    </div>             

                </div>
            </div>
            </div>
         );
    }
}
 
export default EditProfile;