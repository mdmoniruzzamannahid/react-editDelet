import React, { Component } from 'react'
import './Book.css'

class Book extends Component {

state={
    isEditable : false
}
changeKeyHandeler = (event) => {
    if(event.key === 'Enter'){
        this.setState({
            isEditable:false
        })
    }
    
}
    render() {
        let output = this.state.isEditable ? (
        <input
            className="inputBox"
            onKeyPress={this.changeKeyHandeler}
            onChange={(e)=>this.props.changeHandler(e.target.value,this.props.book.id)} 
            type="text" 
            value={this.props.book.name}
           /> 
           ) : (<p>{this.props.book.name}</p>)
        return (
           
                <li className="list-group-item d-flex">
                    <div className="row">
                        <div className="col-sm-8">
                            {output}
                        </div>
                        <div className="col-sm-1">
                            <span className="ml-auto">{ this.props.book.marks }</span>
                        </div>
                       
                        <div className="col-sm-1">
                            <span onClick={()=>this.setState({isEditable:true})}><i className="far fa-edit editBtn"></i></span> 
                        </div>
                        <div className="col-sm-1">
                            <span onClick={()=>this.props.deletHandeler(this.props.book.id)}><i className="far fa-trash-alt deletBtn"></i></span>
                        </div>
                            
                        
                    </div>
                       
                </li>
            

        )
    }
}
export default Book
