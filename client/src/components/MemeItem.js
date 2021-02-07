import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MemeItem extends Component {
    state = {  }
    render() { 
        const { meme }=this.props;
        let name="";
        let url="";
        let caption="";
        if(meme){
            name=meme.name;
            url=meme.url;
            caption=meme.caption;
        }
        return ( 
            <div className="text-center">
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                    <h1 className="text-success">Posted by: {name}</h1>
                    <h1 className="text-primary">Caption: {caption}</h1>
                       <img style={{height:"200px", width:"200px"}} src={url} alt="" className="rounded-circle"/>
                       
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                    
                    </div>                   

                </div>
            </div>
            </div>
         );
    }
}
 
export default MemeItem;