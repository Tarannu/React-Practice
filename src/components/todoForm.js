import React from 'react';
import shortid from 'shortid';

class todoForm extends React.Component{

    state={
        text:''
    }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });

    };
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit({
            id:shortid.generate(),
            text: this.state.text
        });
        this.setState({
            text:""
        });
        
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} 
            style={{padding:50, display: "flex", justifyContent: "center" }}>
            <input 
            name="text"
            value={this.state.text} 
            onChange={this.handleChange} 
            placeholder="Enter your todo here ..."/>
            <button style={{backgroundColor:'blueviolet',color:'white'}} onClick={this.handleSubmit}>Add Todo</button>
            </form>
            
            )
        }

};

export default todoForm;
