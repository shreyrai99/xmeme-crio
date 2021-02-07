import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Post extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            url:'',
            caption:'',
            errors:{},
            check:false,
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors,
                check:true
            })
            
        }
        else{
            this.setState({
                check:false
            })
        }
       
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit=async (e)=>{
        e.preventDefault();
        const newUser = {
            name:this.state.name,
            url:this.state.url,
            caption:this.state.caption            
        }

        try{
            const res = await axios.post('/memes',newUser);
            this.setState({
                check:false,
                name:'',
                url:'',
                caption:''
            })
            //console.log(res.data);
            window.location.reload();

        }catch(err){
            this.setState({
                errors: err.response.data,
                check:true
            })   
        }
    }
    render() { 
        const { errors,check }=this.state;
        
        return ( 
             <section className="container">
               <div className="text-left">
                <h1 className="large text-primary">Post Memes</h1>
                </div>

                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <input type="text" placeholder="* Your Name" name="name"  value={this.state.name} 
                    onChange={this.onChange} 
                    className={classnames('form-control form-control-lg',{'is-invalid': errors.name})}
                        />
                    {errors.name  && (<div className="invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                    <input type="text"  placeholder="* URL of Meme" name="url" value={this.state.url} onChange={this.onChange} 
                     className={classnames('form-control form-control-lg',{'is-invalid': errors.url})}
                    />
                    {errors.url && (<div className="invalid-feedback">{errors.url}</div>)}                    
                    </div>

                    <div className="form-group">
                    <input type="text" placeholder="* Write Caption" name="caption" value={this.state.caption} onChange={this.onChange} 
                     className={classnames('form-control form-control-lg',{'is-invalid': errors.caption})}
                    />
                    {errors.caption && (<div className="invalid-feedback">{errors.caption}</div>)}                    
                    </div>
                   
                 
                    <input type="submit" className="btn btn-primary" value="Post Meme!" />
                </form>
                {check && 
                        <div className="border border-light mb-2">
        
                            <div className="text-center">
                            <button className="btn btn-danger mt-2">Fill missing fields above</button>
                            </div>
                          
                          </div>
                }
            </section>
         );
    }
}
 
export default Post;